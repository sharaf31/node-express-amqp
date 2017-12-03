const amqp = require('amqplib/callback_api')

const AMPQConnector = {
    host: 'amqp://localhost',

    initialize() {
        this.amqp = amqp;
        console.log('created amqp callback');
        this.connect();
        return this;
    },

    handleError(err) {
        console.log('Failed with error code: ' + err.code);
        return false;
    },

    connect() {
        this.amqp.connect(this.host, (err, conn) => {

            // handle exceptions/errors before
            // continuing with the flow
            if (err && err.code) {
                return this.handleError(err);
            }

            conn.createChannel((err, ch) => {

                if (err && err.code) {
                    return this.handleError(err);
                }

                const queue1 = 'sampleTest';
                ch.assertQueue(queue1, {
                    durable: false
                });

                console.log('Queue created');
            });
        });
    }
};

module.exports = AMPQConnector;
