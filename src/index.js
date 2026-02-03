import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config(); // load .env



connectDB()

.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running on PORT ${process.env.PORT}`);

    })
})
.catch((err)=>{
    console.log("MONGO-DB CONNECTION FAILED !!!",err);
    
})