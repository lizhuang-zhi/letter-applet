Component({
	options: {
		multipleSlots: true, // 在组建定义时的选项中启用多slot支持
	},
	/**
	 * 组件的属性列表
	 */
	properties: {
		// 数据长度
		listLength: {
			type: Number,
			value: 0
		},
		// 下拉刷新对象
		pull: {
			type: Object,
			value: {}
		},
		// 上拉加载对象
		push: {
			type: Object,
			value: {}
		},
		/* 设置样式 */
		// 加载gif图片宽度(图片高度为100rpx)
		gifWidth: {
			type: Number,
			value: 140
		},
		// 组件距离顶部高度（绝对定位）
		top: {
			type: Number,
			value: 0
		},
		// 上拉加载的外边距
		pushLoadMargin: {
			type: String,
			value: '0 0 200rpx 0;'
		}
	},
	pageLifetimes: {
		// 页面被显示时
		show() {
			this.setData({
				pull: this.properties.pull,
				push: this.properties.push,
			})
		},
	},
	/**
	 * 组件的初始数据
	 */
	data: {
		pull: {},
		push: {},
		slideStart: [],
		moveTime: 0,
	},

	methods: {
		// 触摸开始事件
		touchstart(e) {
			this.setData({
				// 设置开始滑动属性slideStart
				slideStart: e.touches[0]
			})
		},
		// 触摸滑动事件（在整个滑动过程中都是在一直触发的<多次触发>）
		touchmove(e) {
			// 获取滑动时的时间戳
			let moveTime = new Date().getTime();
			if (moveTime - this.data.moveTime <= 2000) {
				return;
			} else {
				this.setData({
					moveTime: moveTime
				})
			}
			let slideStart = this.data.slideStart;
			let slideMove = e.touches[0];
			let startX = slideStart.pageX;
			let startY = slideStart.pageY;
			let moveEndX = slideMove.pageX;
			let moveEndY = slideMove.pageY;
			let X = moveEndX - startX;
			let Y = moveEndY - startY;
			if (Math.abs(Y) > Math.abs(X) && Y > 0) {
				console.log("top 2 bottom");
				// 下拉刷新
				this.pullRefresh()
			} else if (Math.abs(Y) > Math.abs(X) && Y < 0) {
				console.log("bottom 2 top");
				// 上拉加载更多
				this.loadMore()
			}
		},
		/**下拉刷新 */
		pullRefresh(e) {
			this.triggerEvent('refresh', {
				refresh: true
			}) // 将num通过参数的形式传递给父组件
		},
		/**上拉加载更多 */
		loadMore(e) {
			this.triggerEvent('toload', {
				toload: true
			}) // 将num通过参数的形式传递给父组件
		}
	}
})