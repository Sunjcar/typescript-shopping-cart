import { Catalog } from "../Components/Catalog"
import { ActionInterface, PageProps } from "../Interfaces/globalTypes"
import { Filter } from "../Utilities/Filter"
import { Dispatch, Fragment } from "react";


export const Product: React.FC<PageProps> = ({ state, dispatch, ctx }): JSX.Element => {


  const renderContent = () => {
    if (state.filteredItems.length) {
      return (
        <div className="flex flex-col flex-1">
          <Filter
            dispatch={dispatch as Dispatch<ActionInterface>}
          />
          <section className="grid items-center justify-center flex-1 gap-[4rem] mt-[4rem ] md:grid-cols-4 p-12 mx-auto">
            {state.filteredItems.map(item => (
              <Catalog
                key={item.id}
                id={item.id}
                name={item.title}
                category={item.category}
                price={item.price}
                rate={item.rating.rate}
                image={item.image}
                dispatch={dispatch as React.Dispatch<ActionInterface>}
                added={item.added as boolean}
                quantity={item.quantity}
              />
            ))}
          </section>
        </div>
      )
    } else {
      if (state.searching) {
        return (
          <Filter
          dispatch={dispatch as React.Dispatch<ActionInterface>}
        />
        )
      } else {
        return (
          <div className='flex items-center justify-center w-screen'> ... Loading </div>
        )
      }
    }
  }

  return (
    <div className="flex flex-1" >
      {renderContent()}
    </div>
  )
}