import mongoose, { Document, ObjectId, Schema } from "mongoose";

// Interface for the coach document
interface ICoach extends Document {
    name: string;
    email: string;
    profileImageUrl: string;
    profileInfo: string;
    avgRate: number; // Better to use 'number' instead of 'string' for rates
    comment: {
        user: Schema.Types.ObjectId;
        comment: string;
        rating: number; // Use 'number' for rating
    }[];
}

// Coach schema definition
const coachSchema = new mongoose.Schema<ICoach>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    profileImageUrl: {
        type: String,
        required: true,
    },
    profileInfo: {
        type: String,
        required: true,
    },
    avgRate: {
        type: Number,
        default: 0,
    },
    comment: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'User', // Assuming there's a 'User' model for reference
            },
            comment: {
                type: String,
            },
            rating: {
                type: Number,
                default: 0,
            },
        },
    ],
});

// Creating the model
const Coach = mongoose.model<ICoach>("Coach", coachSchema);
export default Coach;
