const config = {
    port: 80,
    tokenExpiresIn: '1h',
    tokenKey: 'secret-key',
    saltRounds: 5,
    defaultUser: {
        id: undefined,
        name: undefined,
        username: undefined
    }
};

module.exports = config;