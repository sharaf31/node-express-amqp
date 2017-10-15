const handlers = require('./handlers');

module.exports = {
    'user':{
        name:'user',
        method:'post',
        route:'/user-mgt/create',
        handler:handlers.user
    },
}