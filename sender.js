const amqp = require('amqplib/callback_api');
const logger = require('./logger');
module.exports = {

    sendMessage: function (message) {
        var value = JSON.stringify(message);
        logger.info('Message printed inside Queue Sender:' + value);
        amqp.connect('amqp://localhost', function (err, conn) {
            conn.createChannel(function (err, ch) {
                ch.sendToQueue("sampleTest", new Buffer(value.toString()));
            });

        });
    }
}

