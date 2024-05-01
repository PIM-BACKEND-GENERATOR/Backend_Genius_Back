import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const historiqueSchema = new Schema(
    {
        username: {
            type: String,
            required: true
        },
        historique: {
            type: Schema.Types.Mixed,
            required: true
        }
    },
    {
        timestamps: true 
    }
);

export default model('Historique', historiqueSchema);
