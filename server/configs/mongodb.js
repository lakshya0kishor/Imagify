import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on("connected", () => {
            console.log("Database Connected");
        });

        await mongoose.connect(process.env.MONGODB_URI); // No options needed
    } catch (error) {
        console.error("Database connection error:", error.message);
        process.exit(1); // Exit if connection fails
    }
};

export default connectDB;
