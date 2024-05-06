import { NextFunction, Request, Response } from "express";
import { TryCatch } from "../middleware/error.js";
import Animal from "../models/animal.js";
import ErrorHandler from "../utils/utility-class.js";
import { AnimalRequestBody } from "../utils/types.js";


export const getAllAnimal = TryCatch(
    async (req: Request, res: Response, next: NextFunction) => {
        const animal = await Animal.find({});

        return res.status(200).json({
            success: true,
            data: animal
        })
    }
)


export const deleteAnimal = TryCatch(
    async (req: Request, res: Response, next: NextFunction) => {
        const id = req.params.id;
        await Animal.deleteOne({ _id: id });
        return res.status(200).json({
            success: true,
            message: "Animal is deleted successfully",
        })

    }

)
export const updateAnimal = TryCatch(
    async (req: Request, res: Response, next: NextFunction) => {
        const id = req.params.id
        const { name, description, species, age } = req.body;
        const updatedAnimal = await Animal.findByIdAndUpdate({ _id: id }, {
            name,
            description,
            species,
            age,
            image: req.file?.path,
        });

        if (!updatedAnimal) {
            return next(new ErrorHandler("Cannot find Animal", 404));
        }
        return res.status(200).json({
            success: true,
            message: "Animal updated successfully",
            animal: updateAnimal,
        })
    }

)
export const createAnimal = TryCatch(
    async (req: Request<{}, {}, AnimalRequestBody>, res: Response, next: NextFunction) => {
        const { name, description, species, age } = req.body;
        // const file = req.file as Express.Multer.File;

        const animal = await Animal.create({
            name,
            description,
            species,
            age,
            image: req.file?.path,
        })
        if (!animal) {
            return next(new ErrorHandler("Unable to create product", 500));
        }
        return res.status(200).json({
            success: true,
            message: "Animal created successfully",
        })
    }

)


