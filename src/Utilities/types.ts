
import React from "react";
import { ActionInterface } from "../Interfaces/globalTypes";
import { To } from "react-router-dom";

export interface ButtonProps{
  ProductId?: number;
  dispatch?: React.Dispatch<ActionInterface>;
  added?: boolean;
  content?: string;
  onclick?: Function
}

export interface FilterProps {
    dispatch: React.Dispatch<ActionInterface>,
    isInHeader?: boolean
}

export interface ButtonCategoryProps{
    content: string;
    dispatch: React.Dispatch<ActionInterface>;
    to?: string;
  }

  export interface ButtonSmallProps{
    source: string;
    dependencies?: string | number;
    to?: To;
    from?: string;
    onclick?: React.MouseEventHandler<HTMLButtonElement>;
    isCTA?: boolean;
    dispatch?: React.Dispatch<ActionInterface>;
  }