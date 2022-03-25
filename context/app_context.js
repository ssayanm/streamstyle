// import axios from "axios";
import React, { useContext, useReducer } from "react";
import reducer from "./app_reducer";

import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  SUBMENU_OPEN,
  SUBMENU_CLOSE,
  // GET_PRICELISTS_BEGIN,
  // GET_PRICELISTS_SUCCESS,
  // GET_PRICELISTS_ERROR,
  // GET_SLIDER_BEGIN,
  // GET_SLIDER_SUCCESS,
  // GET_SLIDER_ERROR,
  // GET_CARRENTALS_BEGIN,
  // GET_CARRENTALS_SUCCESS,
  // GET_CARRENTALS_ERROR,
  // GET_PRODUCTS_BEGIN,
  // GET_PRODUCTS_SUCCESS,
  // GET_PRODUCTS_ERROR,
  // GET_SINGLE_PRODUCT_BEGIN,
  // GET_SINGLE_PRODUCT_SUCCESS,
  // GET_SINGLE_PRODUCT_ERROR,
} from "./app_actions";

import { createContext } from "react";

const initialState = {
  isSidebarOpen: false,
  isSubMenuOpen: false,
  // pricelists_loading: false,
  // pricelists_error: false,
  // pricelists: [],
  // slider_loading: false,
  // slider_error: false,
  // slider: [],
  // carrentals_loading: false,
  // carrentals_error: false,
  // carrentals: [],
  // featured_carrentals: [],
  // products: [],
  // products_loading: false,
  // products_error: false,
  // featured_products: [],

  // single_product: [],
  // single_product_loading: false,
  // single_product_error: false,
};

// const purl = `${process.env.url}/pricelists`;
// const surl = `${process.env.url}/sliders`;
// const crurl = `${process.env.url}/carrentals`;
// const produrl = `${process.env.url}/products`;

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const openSubMenu = () => {
    dispatch({ type: SUBMENU_OPEN });
  };

  const closeSubMenu = () => {
    dispatch({ type: SUBMENU_CLOSE });
  };

  // const fetchCarRentals = async (crurl) => {
  //   dispatch({ type: GET_CARRENTALS_BEGIN });
  //   try {
  //     const response = await axios.get(crurl);
  //     const carrentals = response.data;

  //     dispatch({ type: GET_CARRENTALS_SUCCESS, payload: carrentals });
  //   } catch (error) {
  //     dispatch({ type: GET_CARRENTALS_ERROR });
  //   }
  // };

  // const fetchProducts = async (produrl) => {
  //   dispatch({ type: GET_PRODUCTS_BEGIN });
  //   try {
  //     const response = await axios.get(produrl);
  //     const products = response.data;

  //     dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
  //   } catch (error) {
  //     dispatch({ type: GET_PRODUCTS_ERROR });
  //   }
  // };

  // useEffect(() => {
  //   fetchPricelists(purl),
  //     fetchSlider(surl),
  //     fetchCarRentals(crurl),
  //     fetchProducts(produrl);
  // }, []);

  return (
    <AppContext.Provider
      value={{ ...state, openSidebar, closeSidebar, openSubMenu, closeSubMenu }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useAppContext = () => {
  return useContext(AppContext);
};
