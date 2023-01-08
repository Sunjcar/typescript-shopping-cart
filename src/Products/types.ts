
import { Dispatch } from "react";
import { ActionInterface, StateInterface } from "../Interfaces/globalTypes";



export interface ProductProps {
  id: number;
  name: string;
  category: string;
  price: number;
  rate: number;
  image: string;
  dispatch: Dispatch<ActionInterface>
  added: boolean
  quantity?: number
}

export interface CartProps {
  title: string;
  price: number;
  quantity: number;
  img: string;
  dispatch: Dispatch<ActionInterface>;
  id: number,
}
export interface ITotalAmount {
  total: number
}

export const totalAmountInitial: ITotalAmount = {
  total: 0
}


