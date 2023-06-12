export interface Vehicle {
    id: string;
    plate: string;
    chassis: string;
    renavam: string;
    year: number;
    brand: string;
    model: string;
}

export interface VehicleCreate {
    plate: string;
    chassis: string;
    renavam: string;
    year: number;
    brand: string;
    model: string;
}

export interface BrandsAndModels {
    brand: string;
    models: string[];
}