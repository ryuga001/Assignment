import { Schema, model } from "mongoose";

const AnimalSchema = new Schema({
    name: {
        type: String,
        trim: true,
    },
    description: {
        type: String,
    },
    species: {
        type: String,
    },
    age: {
        type: Number,
    },
    image: {
        type: String,
    }
}, {
    timestamps: true,
})

const Animal = model("animal", AnimalSchema);

export default Animal;



