const db = require('../config/connection');

const {
    User, 
    // Blob
} = require('../models');

const clearDB = require('./clearDB');

db.once('open', async () => {

    await clearDB('User', 'users');
    // await clearDB('Blob', 'blobs');

    await User.create({
        firstName: 'Aaron',
        lastName: 'Sanchez',
        email: 'test@gmail.com',
        password: 'password'
    });

    console.log('users seeded');

    process.exit();
})