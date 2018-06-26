const mongoose = require('mongoose');
mongoose.plugin(schema => {
  schema.options.usePushEach = true;
});
require('./song');
require('./lyric');
