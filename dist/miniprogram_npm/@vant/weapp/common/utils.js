"use strict";function isDef(e){return null!=e}function isObj(e){var t=typeof e;return null!==e&&("object"==t||"function"==t)}function isNumber(e){return/^\d+(\.\d+)?$/.test(e)}function range(e,t,n){return Math.min(Math.max(e,t),n)}function nextTick(e){setTimeout(function(){e()},1e3/30)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.addUnit=exports.getSystemInfoSync=exports.nextTick=exports.range=exports.isNumber=exports.isObj=exports.isDef=void 0,exports.isDef=isDef,exports.isObj=isObj,exports.isNumber=isNumber,exports.range=range,exports.nextTick=nextTick;var systemInfo=null;function getSystemInfoSync(){return systemInfo=null==systemInfo?wx.getSystemInfoSync():systemInfo}function addUnit(e){if(isDef(e))return isNumber(e=String(e))?e+"px":e}exports.getSystemInfoSync=getSystemInfoSync,exports.addUnit=addUnit;