const logger = require('./logger');
const messageSender = require('./sender');

module.exports = {
    user(req, res) {
        const bodyContent = req.body;
        res.setHeader('Content-Type', 'application/json');
        logger.info(bodyContent);
        messageSender.sendMessage(bodyContent);
        res.send('OK');
    }
}