import pkg from 'pg';
const { Pool } = pkg;
import bcrypt from 'bcrypt';

// Database connection setup
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || '5432'),
});

// Define the users to insert
const users = [
    {
        username: 'johnDoe',
        password: 'password123', // Use a secure password in production
    },
    {
        username: 'janeSmith',
        password: 'password456', // Use a secure password in production
    },
    {
        username: 'bobJohnson',
        password: 'password789', // Use a secure password in production
    },
];

// Seed function to insert users into the database
const seedUsers = async () => {
    const client = await pool.connect();

    try {
        for (const user of users) {
            const hashedPassword = await bcrypt.hash(user.password, 10); // Hash password for security
            
            await client.query(
                'INSERT INTO users (username, password) VALUES ($1, $2, $3)',
                [user.username, hashedPassword]
            );

            console.log(`User ${user.username} added!`);
        }
    } catch (err) {
        console.error('Error inserting users:', err);
    } finally {
        client.release();
    }
};

// Run the seeding function
seedUsers().then(() => {
    console.log('Seeding complete');
    pool.end();
}).catch((err) => {
    console.error('Seeding failed:', err);
    pool.end();
});

export {seedUsers}