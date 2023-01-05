import { ActionInterface, ChangeQuantityInterface, ProductInterface, RoutesInterface, StateInterface } from "../Interfaces/globalTypes";


export const initialState = (): StateInterface => {
  return {
    products: [],
    filteredItems: [],
    shoppingCart: [],
    categories: ["All items"],
    current: "/",
    history: "",
    searching: "",
    isSearching: false,
    filterAt: "All items",
    totalAmount: 0,
    error: false,
    loading: true
  }
}

export function reducer(state: StateInterface, action: ActionInterface): StateInterface {
  const { type, payload } = action
  let index: number | undefined;
  let newShoppingCart: ProductInterface[];
  let newProduct: ProductInterface;

  const getIndex = () => {
    return state.products.findIndex(product => product.id === payload)
  }

  switch (type) {
    case "RESET":
      return {
        ...state,
        shoppingCart: []
      }

    case "AMOUNT":
      return {
        ...state,
        totalAmount: payload as number
      }

    case "CHANGE_QUANTITY":
      index = state.shoppingCart.findIndex(
        product => product.id === (payload as ChangeQuantityInterface).id
      )
      newShoppingCart = [...state.shoppingCart]
      newShoppingCart[index].quantity = (payload as ChangeQuantityInterface).quantity

      return {
        ...state,
        shoppingCart: newShoppingCart
      }

    case "SEARCH":
      return {
        ...state,
        isSearching: !state.isSearching
      }
    case "MOVING":
      state.current = (payload as RoutesInterface).current;
      state.history = (payload as RoutesInterface).history
      return { ...state }

    case "REMOVE":
      index = getIndex()
      newShoppingCart = state.shoppingCart.filter(product => product.id !== payload)
      state.products[index].added = false;
      return {
        ...state,
        shoppingCart: newShoppingCart
      }

    case "ADD_TO_CART":
      index = getIndex()
      if (index >= 0) {
        newProduct = state.products[index]
        newProduct.quantity = 1
        newShoppingCart = [
          ...state.shoppingCart,
          newProduct
        ]
      } else {
        newShoppingCart = state.shoppingCart
      }
      state.products[index].added = true;
      return {
        ...state,
        shoppingCart: newShoppingCart
      }
    case "SEARCHING":
      state.filteredItems = state.products.filter(item => {
        let searching: string = payload as string
        return item.title.toLowerCase().includes(searching.toLowerCase())
      })
      return {
        ...state,
        searching: payload as string
      }

    case "FILTER":
      state.filteredItems = payload === "All products" ? state.products : state.products.filter(item => item.category === payload)
      return { ...state, filterAt: payload as string }

    case "DISPLAY_PRODUCTS":
      (payload as ProductInterface[]).forEach((product: ProductInterface) => {
        if (!state.categories.includes(product.category)) {
          state.categories.push(product.category)
        }
      })
      state.products = payload as ProductInterface[];
      state.filteredItems = state.products;
      return {
        ...state,
        loading: false
      }

    case "ERROR":
      return {
        ...state,
        error: true,
        loading: false
      }

    default:
      return { ...state }
  }
}