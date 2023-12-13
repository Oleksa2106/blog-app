import mongoose from "mongoose"



const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-ljuhgls-shard-00-00.uostk1w.mongodb.net:27017,ac-ljuhgls-shard-00-01.uostk1w.mongodb.net:27017,ac-ljuhgls-shard-00-02.uostk1w.mongodb.net:27017/?ssl=true&replicaSet=atlas-kr43z7-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true });
        console.log('database good')
    } catch (error) {
        console.log('database bad', error)
    }
}

export default Connection;