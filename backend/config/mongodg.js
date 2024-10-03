import mongoose from 'mongoose'

const connectDB = async () =>{
    // connect to mongodb with mongoose
    mongoose.connection.on('connected', ()=>{
        console.log('MongoDB Connected...');
    })
    await mongoose.connect(`${process.env.MONGOOB_URL}/e-commerce`)
}
 export default connectDB;