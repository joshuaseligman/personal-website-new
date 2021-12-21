import mongoose from 'mongoose';

let cachedDb:mongoose.Connection|null = null;

/**
 * Connects to the database
 * @returns The promise to the database object
 */
async function dbConnect() {
    // If we have already connected, return the current database
    if (cachedDb) {
        return cachedDb;
    }

    // Make sure we have a URI
    if (!process.env.DB_URI) {
        throw new Error('MongoDB URI not defined');
    }

    // Connect to the database
    await mongoose.connect(process.env.DB_URI);
    const db:mongoose.Connection = mongoose.connection;

    // Function to run when we connect
    db.once('open', () => {
        console.log('MongoDB connection established');
    });

    // Function to run when we encounter a database error
    db.on('error', (err) => {
        console.error(`MongoDB error: ${err}`);
        process.exit(-1);
    })

    cachedDb = db;

    return db;
}

export default dbConnect;