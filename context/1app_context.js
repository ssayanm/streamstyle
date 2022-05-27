// import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./app_reducer";

import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  SUBMENU_OPEN,
  SUBMENU_CLOSE,
  CHANNEL_OPEN,
  CHANNEL_CLOSE,
  // GET_HOWITWORKS_BEGIN,
  // GET_HOWITWORKS_SUCCESS,
  // GET_HOWITWORKS_ERROR,
  // GET_PRICELISTS_BEGIN,
  // GET_PRICELISTS_SUCCESS,
  // GET_PRICELISTS_ERROR,
  // GET_SLIDER_BEGIN,
  // GET_SLIDER_SUCCESS,
  // GET_SLIDER_ERROR,
  // GET_HOWITWORKS_BEGIN,
  // GET_HOWITWORKS_SUCCESS,
  // GET_HOWITWORKS_ERROR,
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
  isChannelOpen: false,
  // pricelists_loading: false,
  // pricelists_error: false,
  // pricelists: [],
  // slider_loading: false,
  // slider_error: false,
  // slider: [],
  // HOWITWORKS_loading: false,
  // HOWITWORKS_error: false,
  // HOWITWORKS: [],
  // featured_HOWITWORKS: [],
  // howItWorks: [],
  // howItWorks_loading: false,
  // howItWorks_error: false,
  // featured_products: [],

  // single_product: [],
  // single_product_loading: false,
  // single_product_error: false,
};

// const purl = `${process.env.url}/api/how-it-works`;

// const surl = `${process.env.url}/sliders`;
// const crurl = `${process.env.url}/HOWITWORKS`;
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

  const openChannel = () => {
    dispatch({ type: CHANNEL_OPEN });
  };

  const closeChannel = () => {
    dispatch({ type: CHANNEL_CLOSE });
  };

  // const fetchHowItWorks = async (purl) => {
  //   dispatch({ type: GET_HOWITWORKS_BEGIN });
  //   try {
  //     const response = await axios.get(purl);
  //     const howItWorks = response.data;

  //     dispatch({ type: GET_HOWITWORKS_SUCCESS, payload: howItWorks });
  //   } catch (error) {
  //     dispatch({ type: GET_HOWITWORKS_ERROR });
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
  //   fetchHowItWorks(purl);
  // }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        openSubMenu,
        closeSubMenu,
        openChannel,
        closeChannel,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useAppContext = () => {
  return useContext(AppContext);
};
