"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.isPromise=exports.isObject=exports.isFunction=exports.chooseFile=exports.isVideo=exports.isImageFile=void 0;var IMAGE_REGEXP=/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;function isImageUrl(e){return IMAGE_REGEXP.test(e)}function isImageFile(e){return e.type?0===e.type.indexOf("image"):e.path?isImageUrl(e.path):!!e.url&&isImageUrl(e.url)}function isVideo(e,i){return"video"===i}function chooseFile(e){var i=e.accept,s=e.multiple,o=e.capture,t=e.compressed,n=e.maxDuration,r=e.sizeType,c=e.camera,u=e.maxCount;switch(i){case"image":return new Promise(function(e,i){wx.chooseImage({count:s?Math.min(u,9):1,sourceType:o,sizeType:r,success:e,fail:i})});case"media":return new Promise(function(e,i){wx.chooseMedia({count:s?Math.min(u,9):1,sourceType:o,maxDuration:n,sizeType:r,camera:c,success:e,fail:i})});case"video":return new Promise(function(e,i){wx.chooseVideo({sourceType:o,compressed:t,maxDuration:n,camera:c,success:e,fail:i})});default:return new Promise(function(e,i){wx.chooseMessageFile({count:s?u:1,type:"file",success:e,fail:i})})}}function isFunction(e){return"function"==typeof e}function isObject(e){return null!==e&&"object"==typeof e}function isPromise(e){return isObject(e)&&isFunction(e.then)&&isFunction(e.catch)}exports.isImageFile=isImageFile,exports.isVideo=isVideo,exports.chooseFile=chooseFile,exports.isFunction=isFunction,exports.isObject=isObject,exports.isPromise=isPromise;