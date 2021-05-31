let gulp = require('gulp');
let rename = require('gulp-rename'); //对改变之后的文件重命名
let clean = require('gulp-clean'); //清除文件 的插件
// let scss = require('gulp-scss'); 
let scss = require('gulp-sass'); //将scss文件编译成css
let px2rpx = require('postcss-px2rpx');
let autoprefixer = require('gulp-autoprefixer'); //为css增加前缀 自动化处理css前缀
let babel = require('gulp-babel'); //将es6 转换成 es5
let px2rem = require('gulp-px2rem'); //将css文件的 px 转换成rem（1rem = 16px）
let postCss = require('gulp-postcss');
// 压缩js文件
let uglify = require('gulp-uglify');
// 压缩css  gulp-minify-css
var minifyCSS = require('gulp-minify-css');
const cleanCSS = require('gulp-clean-css');
var csso = require('gulp-csso');
// 压缩json
var util = require('gulp-util'),
    jsonMinify = require('gulp-json-minify');
// 压缩wxml
var viewMinify = require('gulp-view-minify');

/** 解释：
 gulp.src(path) - 选择文件，传入参数是文件路径。
 gulp.dest(path) - 输出文件
 gulp.pipe() - 管道，你可以暂时将 pipe 理解为将操作加入执行队列
 gulp.series() - 将任务函数和/或组合操作组合成更大的操作，这些操作将按顺序依次执行。
 **/

let client = './miniprogram';
let dist = './dist';

function wxmlTask() {
    return gulp.src(`${client}/**/*.wxml`)
        .pipe(viewMinify())
        .pipe(gulp.dest(dist))
}

/** 生成map；将es6的写法 转换成es5； **/
//生成sourcemap文件,简单讲就是文件压缩后不利于查看与调试，但是有了sourcemap，出错的时候，除错工具将直接显示原始代码，而不是转换后的代码
// 压缩js
function jsTask() {
    return gulp.src(`${client}/**/*.js`)
    .pipe(uglify())
    .pipe(gulp.dest(dist))
}

/** 将px转换成 rpx  **/
function scssTask() {
    return gulp.src(`${client}/**/*.scss`)
        .pipe(scss())
        .pipe(postCss([px2rpx()]))
        .pipe(minifyCSS({keepBreaks:true}))
        .pipe(rename({
            extname: '.wxss'
        }))
        .pipe(gulp.dest(dist))
}

/** 压缩css **/
function wxssTask() {
    return gulp.src(`${client}/**/*.wxss`)
        // .pipe(minifyCSS({keepBreaks:true}))
        // .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(csso())
        .pipe(gulp.dest(dist))
}

/** 将client 下的 json 复制并压缩到 dist目录目录下  **/
function jsonTask() {
    return gulp.src(`${client}/**/*.json`)
        .pipe(jsonMinify())
        .pipe(gulp.dest(dist))
        .on('error', util.log);
}

function wxsTask() {
    return gulp.src(`${client}/**/*.wxs`)
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(rename({
            extname: '.wxs'
        }))
        .pipe(gulp.dest(dist))
}

/** 将client 下的 图片（主包）复制到 dist目录目录下 **/
function imgTask() {
    return gulp.src(`${client}/images/*`)
    .pipe(gulp.dest(dist + '/images/'))
}
/** 将client 下的 子包中的图片复制到 对应目录下 **/
function imgTaskInner() {
    return gulp.src(`${client}/**/images/*`)
        .pipe(gulp.dest(dist))
}

/** 删除dist 目录下的所有文件 **/
function clearTask() {
    return gulp.src(dist, {
            read: false
        })
        .pipe(clean())
}

/** 监听文件变化的操作,进行编译 **/
function watchTask(cb) {
    gulp.watch([`${client}/**/*.wxml`], {
        delay: 1000
    }, wxmlTask);
    gulp.watch([`${client}/**/*.scss`], {
        delay: 1000
    }, scssTask);
    gulp.watch([`${client}/**/*.js`], {
        delay: 1000
    }, jsTask);
    gulp.watch([`${client}/**/*.wxss`], {
        delay: 1000
    }, wxssTask);
    gulp.watch([`${client}/**/*.wxs`], {
        delay: 1000
    }, wxsTask);
    gulp.watch([`${client}/img/*`], {
        delay: 1000
    }, imgTask);
}

/** 按一定顺序执行gulp任务 **/
// 打包
exports.build = gulp.series(clearTask, wxmlTask, jsTask, jsonTask, wxssTask, scssTask, wxsTask, imgTask, imgTaskInner)

// 监听文件变化之后运行
exports.watch = watchTask