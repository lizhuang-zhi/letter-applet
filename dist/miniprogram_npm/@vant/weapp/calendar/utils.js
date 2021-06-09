"use strict";function formatMonthTitle(t){return(t=!(t instanceof Date)?new Date(t):t).getFullYear()+"年"+(t.getMonth()+1)+"月"}function compareMonth(t,e){t instanceof Date||(t=new Date(t)),e instanceof Date||(e=new Date(e));var a=t.getFullYear(),n=e.getFullYear(),t=t.getMonth(),e=e.getMonth();return a===n?t===e?0:e<t?1:-1:n<a?1:-1}function compareDay(t,e){var a=compareMonth(t=!(t instanceof Date)?new Date(t):t,e=!(e instanceof Date)?new Date(e):e);if(0!==a)return a;t=t.getDate(),e=e.getDate();return t===e?0:e<t?1:-1}function getDayByOffset(t,e){return(t=new Date(t)).setDate(t.getDate()+e),t}function getPrevDay(t){return getDayByOffset(t,-1)}function getNextDay(t){return getDayByOffset(t,1)}function calcDateNum(t){var e=new Date(t[0]).getTime();return(new Date(t[1]).getTime()-e)/864e5+1}function copyDates(t){return Array.isArray(t)?t.map(function(t){return null===t?t:new Date(t)}):new Date(t)}function getMonthEndDay(t,e){return 32-new Date(t,e-1,32).getDate()}function getMonths(t,e){var a=[],n=new Date(t);for(n.setDate(1);a.push(n.getTime()),n.setMonth(n.getMonth()+1),1!==compareMonth(n,e););return a}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getMonths=exports.getMonthEndDay=exports.copyDates=exports.calcDateNum=exports.getNextDay=exports.getPrevDay=exports.getDayByOffset=exports.compareDay=exports.compareMonth=exports.formatMonthTitle=exports.ROW_HEIGHT=void 0,exports.ROW_HEIGHT=64,exports.formatMonthTitle=formatMonthTitle,exports.compareMonth=compareMonth,exports.compareDay=compareDay,exports.getDayByOffset=getDayByOffset,exports.getPrevDay=getPrevDay,exports.getNextDay=getNextDay,exports.calcDateNum=calcDateNum,exports.copyDates=copyDates,exports.getMonthEndDay=getMonthEndDay,exports.getMonths=getMonths;