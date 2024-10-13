import mongoose from "mongoose";

interface IPlan extends Document {
    title: string;
    info: string;
    activePerks: string;
    inActivePerks: string;
    price: number;
}

const planSchema = new mongoose.Schema<IPlan>({
    title: {type: String, required: true, unique: true},
    info: {type: String, required: true},
    activePerks: {type: String, required: true},
    inActivePerks: {type: String, required: true},
    price: {type: Number, required: true}
})


const Plan = mongoose.model<IPlan>('Plan', planSchema);

export default Plan;