const db = require('../config/connection');
const { User, Blob } = require('../models');
const clearDB = require('./clearDB');

db.once('open', async () => {
    try {
        await clearDB('User', 'users');
        await clearDB('Blob', 'blobs');

        // Create User 1
        const user1 = await User.create({
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@example.com',
            password: 'password'
        });

        // Create Blobs for User 1
        const blob1User1 = await Blob.create({
            name: 'Coding Blob 1',
            color: 'blue',
            user: user1._id,
            tasks: [
                { name: 'Task 1', date: new Date('2024-05-10') },
                { name: 'Task 2', date: new Date('2024-05-11') }
            ]
        });

        const blob2User1 = await Blob.create({
            name: 'Coding Blob 2',
            color: 'green',
            user: user1._id,
            tasks: [
                { name: 'Task 1', date: new Date('2024-05-12') },
                { name: 'Task 2', date: new Date('2024-05-13') }
            ]
        });

        // Assign Blob ObjectIds to User 1
        user1.blobs.push(blob1User1._id);
        user1.blobs.push(blob2User1._id);
        await user1.save();

        // Create User 2
        const user2 = await User.create({
            firstName: 'Jane',
            lastName: 'Doe',
            email: 'jane@example.com',
            password: 'password'
        });

        // Create Blobs for User 2
        const blob1User2 = await Blob.create({
            name: 'Work Blob 1',
            color: 'orange',
            user: user2._id,
            tasks: [
                { name: 'Task 1', date: new Date('2024-05-10') },
                { name: 'Task 2', date: new Date('2024-05-11') }
            ]
        });

        const blob2User2 = await Blob.create({
            name: 'Work Blob 2',
            color: 'purple',
            user: user2._id,
            tasks: [
                { name: 'Task 1', date: new Date('2024-05-12') },
                { name: 'Task 2', date: new Date('2024-05-13') }
            ]
        });

        // Assign Blob ObjectIds to User 2
        user2.blobs.push(blob1User2._id);
        user2.blobs.push(blob2User2._id);
        await user2.save();

        console.log('Users and blobs seeded');
        process.exit();
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
});
