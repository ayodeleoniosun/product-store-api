import {Service} from "typedi";
import ProductModel, {Product} from "../models/product.model";

@Service()
export class ProductRepository {
    async findAllProducts(): Promise<Product[]> {
        return ProductModel.find({}).sort({createdAt: 'desc'});
    }

    async findUserProducts(userId: string): Promise<Product[]> {
        return ProductModel.find({}).sort({createdAt: 'desc'});
    }

    async create(payload: Partial<object>): Promise<Product> {
        return await ProductModel.create(payload);
    }

    async findProductByCriteria(criteria: object): Promise<Product> {
        return ProductModel.findOne(criteria);
    }

    async findExistingProductByName(id: string, name: string, userId: string): Promise<Product> {
        return ProductModel.findOne({"_id": {"$ne": id}, name, userId});
    }

    async findById(id: string): Promise<Product> {
        return ProductModel.findById(id);
    }

    async findByIdAndUpdate(id: object, payload: object): Promise<Product> {
        return ProductModel.findByIdAndUpdate(id, payload, {new: true});
    }

    async findByIdAndDelete(id: string): Promise<Product> {
        return ProductModel.findByIdAndDelete(id);
    }
}