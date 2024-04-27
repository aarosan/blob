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
            name: 'Coding',
            color: 'blue',
            user: user1._id,
            tasks: [
                { name: '5 HackerRank Problems', date: new Date('2024-05-10') },
                { name: 'Connect MongoDB', date: new Date('2024-05-11') }
            ]
        });

        const blob2User1 = await Blob.create({
            name: 'Writing',
            color: 'green',
            user: user1._id,
            tasks: [
                { name: 'Finish Chapter', date: new Date('2024-05-12') },
                { name: 'Research', date: new Date('2024-05-13') }
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
            name: 'Work',
            color: 'orange',
            user: user2._id,
            tasks: [
                { name: 'Presentation', date: new Date('2024-05-10') },
                { name: 'Document', date: new Date('2024-05-11') }
            ]
        });

        const blob2User2 = await Blob.create({
            name: 'Gardening',
            color: 'purple',
            user: user2._id,
            tasks: [
                { name: 'Plant flowers', date: new Date('2024-05-12') },
                { name: 'Water Plants', date: new Date('2024-05-13') }
            ]
        });

        // Assign Blob ObjectIds to User 2
        user2.blobs.push(blob1User2._id);
        user2.blobs.push(blob2User2._id);
        await user2.save();


        const user3 = await User.create({
            firstName: 'Example',
            lastName: 'Demo',
            email: 'demo@example.com',
            password: 'password'
        });

        const blob1User3 = await Blob.create({
            name: 'coding',
            color: 'blue',
            user: user3._id,
            tasks: [
                { name: 'Presentation', date: new Date('2024-05-10') },
                { name: 'Document', date: new Date('2024-05-11') }
            ]
        });

        const blob2User3 = await Blob.create({
            name: 'gardening',
            color: 'green',
            user: user3._id,
            tasks: [
                { name: 'Plant flowers', date: new Date('2024-05-12') },
                { name: 'Water Plants', date: new Date('2024-05-13') }
            ]
        });

        const blob3User3 = await Blob.create({
            name: 'life',
            color: 'purple',
            user: user3._id,
            tasks: [
                { name: 'Plant flowers', date: new Date('2024-05-12') },
                { name: 'Water Plants', date: new Date('2024-05-13') }
            ]
        });

        const blob4User3 = await Blob.create({
            name: 'grocery',
            color: 'orange',
            user: user3._id,
            tasks: [
                { name: 'Plant flowers', date: new Date('2024-05-12') },
                { name: 'Water Plants', date: new Date('2024-05-13') }
            ]
        });

        const blob5User3 = await Blob.create({
            name: 'writing',
            color: 'yellow',
            user: user3._id,
            tasks: [
                { name: 'Plant flowers', date: new Date('2024-05-12') },
                { name: 'Water Plants', date: new Date('2024-05-13') }
            ]
        });

        const blob6User3 = await Blob.create({
            name: 'work',
            color: 'pink',
            user: user3._id,
            tasks: [
                { name: 'Plant flowers', date: new Date('2024-05-12') },
                { name: 'Water Plants', date: new Date('2024-05-13') }
            ]
        });

        const blob7User3 = await Blob.create({
            name: 'reading',
            color: 'red',
            user: user3._id,
            tasks: [
                { name: 'Plant flowers', date: new Date('2024-05-12') },
                { name: 'Water Plants', date: new Date('2024-05-13') }
            ]
        });

        user3.blobs.push(blob1User3._id);
        user3.blobs.push(blob2User3._id);
        user3.blobs.push(blob3User3._id);
        user3.blobs.push(blob4User3._id);
        user3.blobs.push(blob5User3._id);
        user3.blobs.push(blob6User3._id);
        user3.blobs.push(blob7User3._id);
        await user3.save();

        console.log('Users and blobs seeded');
        process.exit();
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
});
