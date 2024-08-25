const mongoose = require('mongoose');


const URL = "mongodb://127.0.0.1:27017/apnafood";



const MongoDB = async()=>{
    try{
        await mongoose.connect(URL);
        console.log("databse connected");
        
        const fooddata = await mongoose.connection.db.collection("foodData2").find({}).toArray();
        global.food_items = fooddata;


    }catch(err){
        console.log(err);
        console.log("database is not connected");
    }
}

module.exports = MongoDB;
// export default  MongoDB;
