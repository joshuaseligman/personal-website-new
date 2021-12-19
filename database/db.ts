import mongoose from 'mongoose';

let cachedDb:mongoose.Connection|null = null;

async function dbConnect() {
    if (cachedDb) {
        return cachedDb;
    }

    if (!process.env.DB_URI) {
        throw new Error('MongoDB URI not defined');
    }

    await mongoose.connect(process.env.DB_URI);
    const db:mongoose.Connection = mongoose.connection;

    db.once('open', () => {
        console.log('MongoDB connection established');
    });

    db.on('error', (err) => {
        console.error(`MongoDB error: ${err}`);
        process.exit(-1);
    })

    cachedDb = db;

    return db;
}

export default dbConnect;