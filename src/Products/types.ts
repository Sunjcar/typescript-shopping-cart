
import { ActionInterface } from "../Interfaces/globalTypes";



export interface ProductProps{
  id: number;
  name: string;
  category: string;
  price: number;
  rate: number;
  image: string;
  dispatch: React.Dispatch<ActionInterface>
  added: boolean
}

export interface CartProps{
  title: string;
  price: number;
  quantity: number;
  img: string;
  dispatch: React.Dispatch<ActionInterface>;
  id: number,
}
export interface ITotalAmount{
    total: number;
  }
  
  export const totalAmountInitial: ITotalAmount = {
    total: 0
  }
