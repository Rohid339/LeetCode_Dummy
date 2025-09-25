const {createClient} = require('redis');

const redisClient = createClient({
    username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
        host: 'redis-18691.c305.ap-south-1-1.ec2.redns.redis-cloud.com',
        port: 18691
    }
});

module.exports =redisClient;

