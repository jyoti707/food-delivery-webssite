// import mongoose from "mongoose";

// export const connectDB=async()=>{
//     await mongoose.connect('mongodb+srv://greatstack:jyoti123@cluster0.fnqwcks.mongodb.net/FOOD_WEBSITE').then(()=>console.log("DB connected"));
// }
import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("DB connected"));
}