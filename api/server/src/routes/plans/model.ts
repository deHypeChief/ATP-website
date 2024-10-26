import mongoose, { Document, ObjectId, Schema } from 'mongoose';

interface IPlan extends Document {
	planName: string;
	priceInfo: string;
	description: string;
	note: string;
	planImage: string;
	filterPrams: string[];
	coaches: Schema.Types.ObjectId[];
	billingPlans: {
		billingName: string;
		interval: number; //bills in months
		currency: string;
		discountPercentage: number;
	}[];
}

const planSchema = new mongoose.Schema<IPlan>({
	planName: { type: String, required: true, unique: true },
	priceInfo: { type: String, required: true },
	description: { type: String, required: true },
	note: { type: String},
	planImage: { type: String, required: true },
	filterPrams: [{ type: String, required: true }],
	coaches: [{ type: Schema.Types.ObjectId, ref: 'Coach', required: true }],
	billingPlans: [
		{
			billingName: { type: String, required: true },
			interval: { type: Number, required: true },
			currency: { type: String, required: true },
			discountPercentage: { type: Number, required: true }
		},
	],
});

const Plan = mongoose.model<IPlan>('Plan', planSchema);

export default Plan;
