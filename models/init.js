var mongoose = require("mongoose");


mongoose.connect('mongodb://192.168.1.3:32772/first-web-app', {
    useMongoClient: true
});

const db = mongoose.connection
  db.on('error', console.error.bind(console, '连接错误：'))
  db.once('open', (callback) => {
    console.log('MongoDB连接成功！！')
});
