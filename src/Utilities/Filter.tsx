import React, { ChangeEvent, useContext } from "react";
import { FilterProps } from "./types";

import { ctx } from "../Interfaces/globalTypes";
import { ButtonCategory} from "./Button";


export const Filter: React.FC<FilterProps> = ({ dispatch, isInHeader }): JSX.Element => {
  const state = useContext(ctx)
  const { categories} = state

  console.log(categories)
  return (
    <section className="flex justify-around bg-slate-300">
      {categories.map(category => (
        <ButtonCategory
          key={category}
          content={category}
          dispatch={dispatch}
          to={isInHeader ? "/" : ""}
        />
      ))}
    </section>
  )
}