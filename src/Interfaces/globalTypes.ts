import { Context, createContext, Dispatch } from "react";
import { initialState } from "../Reducer";

export interface ChangeQuantityInterface{
  id: number;
  quantity: number
}

export interface RoutesInterface{
  current: string;
  history: string;
}

interface RatingInterface{
  rate: number;
  count: number;
}

export interface ProductInterface{
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: RatingInterface;
  title: string;
  quantity?: number;
  added?: boolean
}

export interface StateInterface{
  products: Array<ProductInterface>,
  filteredItems: Array<ProductInterface>,
  shoppingCart: Array<ProductInterface>,
  searching: string,
  categories: Array<string>,
  current: string,
  history: string,
  isSearching: boolean,
  filterAt: string,
  totalAmount: number,
  error: boolean,
  loading: boolean
}

export type ActionInterface = {
  type: string,
  payload?: 
    | ProductInterface[] 
    | string 
    | number 
    | ChangeQuantityInterface
    | RoutesInterface
}

export interface PageProps {
  state: StateInterface;
  dispatch?: Dispatch<ActionInterface>;
  ctx?: Context<StateInterface>;
}


  export const ctx: Context<StateInterface> = createContext(initialState())
