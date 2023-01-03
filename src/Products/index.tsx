import { Catalog } from "../Components/Catalog"
import { ActionInterface, PageProps } from "../Interfaces/globalTypes"
import { Filter } from "../Utilities/Filter"
import { Dispatch } from "react";


export const Product: React.FC<PageProps> = ({ state, dispatch, ctx }): JSX.Element => {


  const renderContent = (): JSX.Element => {
    if (state.filteredItems.length) {
      return (
        <>
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
              />
            ))}
          </section>
        </>
      )
    } else {
      if (state.searching) {
        return (
          <>
            <Filter
              dispatch={dispatch as Dispatch<ActionInterface>}
            />
            <span className="Home__no-found">No items found</span>
          </>
        )
      } else {
        return (
          <div> ... Loading </div>
        )
      }
    }
  }



  return (
    <div >
      {renderContent()}
    </div>
  )
}