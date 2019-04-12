const moment = require('moment');

//时间格式化
exports.formatTime = time => moment(time).format('YYYY-MM-DD');
