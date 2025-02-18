import { db } from "./server/db";

await db.user.create({
    data: {
        emailAddress: 'test@testing.com',
        firstName: 'Test',
        lastName: 'User',
    }
})
console.log('Test created!');

// video left at 59:41!!!!!!!