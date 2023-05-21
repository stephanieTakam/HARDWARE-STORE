const mongoose = require('mongoose');

const uri = "mongodb+srv://stephanietakam1:<password>@cluster0.y4kgmeh.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
    try{
        // mongodb connection string
        const con = await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB
