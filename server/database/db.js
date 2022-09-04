import mongoose from "mongoose"


const Connection=async()=>{
    const URL=`mongodb://user:shyamk@ac-8p1lwbr-shard-00-00.xzfjjvs.mongodb.net:27017,ac-8p1lwbr-shard-00-01.xzfjjvs.mongodb.net:27017,ac-8p1lwbr-shard-00-02.xzfjjvs.mongodb.net:27017/?ssl=true&replicaSet=atlas-z1rfih-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{useUnifiedTopology: true, useNewUrlParser: true});
        console.log("db connected");
    }catch(error){
        console.log("Error while connecting with database ",error);
    }
}

export default Connection;