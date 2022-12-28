import { createContext } from "react";

export interface ProductInterface {
    name: string;
    price: number;
    image: string;
    id: number
}

export interface StateInterface {
    products: ProductInterface []
}

export interface ActionInterface{
    type: string;
    payload: unknown;
  }

export const ctx = createContext<StateInterface | null>(null)
