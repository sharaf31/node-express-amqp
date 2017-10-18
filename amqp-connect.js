function createConn() {

    console.log('created amqp callback');

    var self = {};
    var amqp = require('amqplib/callback_api')
    self.ampq = amqp;

    amqp.connect('amqp://localhost', function (err, conn) {
        conn.createChannel(function (err, ch) {
            var queue1 = 'sampleTest';
            ch.assertQueue(queue1, {durable: false});
            console.log('Queue created');
        });
        // setTimeout(function() { conn.close(); process.exit(0) }, 500);
    });

//}
    return self;
}

module.exports = createConn;