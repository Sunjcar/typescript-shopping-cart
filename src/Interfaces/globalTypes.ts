import React, { createContext } from "react";

export interface ProductInterface {
    title: string;
    price: number;
    image: string;
    rating: {
        rate: number;
    };
    description:string;
    id: number;
}

export interface StateInterface {
    products: ProductInterface []
    shoppingCart: ProductInterface[];
}

export interface ActionInterface{
    type: string;
    payload: unknown;
  }

export interface ProductProps {
    title: string;
    image: string;
    price: number;
}

export const ctx = createContext<StateInterface | null>(null)
