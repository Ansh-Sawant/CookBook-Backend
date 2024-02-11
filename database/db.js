import mongoose from "mongoose";

const Connection = async () => {
  try {
    const URL = `mongodb://sawantansh17:Ansh2000@ac-odgnue4-shard-00-00.ecfbo5o.mongodb.net:27017,ac-odgnue4-shard-00-01.ecfbo5o.mongodb.net:27017,ac-odgnue4-shard-00-02.ecfbo5o.mongodb.net:27017/?ssl=true&replicaSet=atlas-izk6my-shard-0&authSource=admin&retryWrites=true&w=majority`;
    await mongoose.connect(URL, { useNewUrlParser: true });

    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with Database", error);
  }
};

export default Connection;