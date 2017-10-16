// const amqp=require('amqplib/callback_api');
//
// if (process.argv['RUN_AMQP'] === '1') {
//     amqp.connect('amqp://localhost', function(err, conn) {
//
//         conn.createChannel(function(err, ch) {
//
//             var queue1='sampleTest';
//             var msg= 'hello Rabbit from node 1';
//
//             // ch.assert
//             ch.assertQueue(queue1, {durable: false});
//             ch.sendToQueue(queue1, new Buffer(msg));
//             //   console.log(" [x] Sent %s", msg);
//         });
//         setTimeout(function() { conn.close(); process.exit(0) }, 500);
//     });
// }
