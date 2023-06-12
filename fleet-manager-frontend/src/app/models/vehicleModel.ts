export interface Vehicle {
    id: string;
    plate: string;
    chassi: string;
    renavam: string;
    year: number;
    brand: string;
    model: string;
}

export interface VehicleCreate {
    plate: string;
    chassi: string;
    renavam: string;
    year: number;
    brand: string;
    model: string;
}

export interface BrandsAndModels {
    brand: string;
    models: string[];
}