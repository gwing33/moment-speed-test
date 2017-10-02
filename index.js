const moment = require('moment');
const momentTimezone = require('moment-timezone');

function timeWrap(name, fn) {
  console.time(name);
  fn();
  console.timeEnd(name);
}

timeWrap('moment(dateStr)', function () {
    for(let i = 0; i < 10000; i++) {
        moment('2017-10-02 16:39:45');
    }
});

timeWrap('moment(new Date(dateStr))', function () {
    for(let i = 0; i < 10000; i++) {
        moment('2017-10-02 16:39:45');
    }
});

timeWrap('moment.tz(dateStr, timezone)', function () {
    for(i = 0; i < 10000; i++) {
        momentTimezone.tz('2017-10-02 16:39:45', 'America/Los_Angeles');
    }
});

timeWrap('moment.tz(new Date(dateStr), timezone)', function () {
    for(i = 0; i < 10000; i++) {
        momentTimezone.tz(new Date('2017-10-02 16:39:45'), 'America/Los_Angeles');
    }
});
