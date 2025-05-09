import mongoose from 'mongoose';

const db = `mongodb+srv://nexify:nexify@nexify.zid4hnf.mongodb.net/?retryWrites=true&w=majority&appName=nexify`

mongoose.connect(db, {
}).then(()=>{
    console.log('MongoDB connected...');
}).catch(err => console.log(err));