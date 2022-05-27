import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_HOWITWORKS_ERROR,
  GET_HOWITWORKS_SUCCESS,
  GET_HOWITWORKS_BEGIN,
  GET_SLIDER_BEGIN,
  GET_SLIDER_SUCCESS,
  GET_SLIDER_ERROR,
  GET_CARRENTALS_BEGIN,
  GET_CARRENTALS_SUCCESS,
  GET_CARRENTALS_ERROR,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
  SUBMENU_OPEN,
  SUBMENU_CLOSE,
  CHANNEL_OPEN,
  CHANNEL_CLOSE,
} from "./app_actions";

const app_reducer = (state, action) => {
  switch (action.type) {
    case SIDEBAR_OPEN:
      return { ...state, isSidebarOpen: true };

    case SIDEBAR_CLOSE:
      return { ...state, isSidebarOpen: false };

    case SUBMENU_OPEN:
      return { ...state, isSubMenuOpen: true };

    case SUBMENU_CLOSE:
      return { ...state, isSubMenuOpen: false };

    case CHANNEL_OPEN:
      return { ...state, isChannelOpen: true };

    case CHANNEL_CLOSE:
      return { ...state, isChannelOpen: false };

    case GET_HOWITWORKS_BEGIN:
      return { ...state, howItWorks_loading: true };

    case GET_HOWITWORKS_SUCCESS:
      return {
        ...state,
        howItWorks_loading: false,
        howItWorks: action.payload,
      };

    case GET_HOWITWORKS_ERROR:
      return {
        ...state,
        howItWorks_loading: false,
        howItWorks_error: true,
      };

    // case GET_SLIDER_BEGIN:
    //   return { ...state, slider_loading: true };

    // case GET_SLIDER_SUCCESS:
    //   return {
    //     ...state,
    //     slider_loading: false,
    //     slider: action.payload,
    //   };

    // case GET_SLIDER_ERROR:
    //   return {
    //     ...state,
    //     slider_loading: false,
    //     slider_error: true,
    //   };

    // case GET_CARRENTALS_BEGIN:
    //   return { ...state, carrentals_loading: true };

    // case GET_CARRENTALS_SUCCESS:
    //   const featured_carrentals = action.payload.filter(
    //     (carrentals) => carrentals.featured === true
    //   );
    //   return {
    //     ...state,
    //     carrentals_loading: false,
    //     carrentals: action.payload,
    //     featured_carrentals,
    //   };

    // case GET_CARRENTALS_ERROR:
    //   return {
    //     ...state,
    //     carrentals_loading: false,
    //     carrentals_error: true,
    //   };

    // case GET_PRODUCTS_BEGIN:
    //   return { ...state, products_loading: true };

    // case GET_PRODUCTS_SUCCESS:
    //   const featured_products = action.payload.filter(
    //     (products) => products.featured === true
    //   );
    //   return {
    //     ...state,
    //     products_loading: false,
    //     products: action.payload,
    //     featured_products,
    //   };

    // case GET_PRODUCTS_ERROR:
    //   return {
    //     ...state,
    //     products_loading: false,
    //     products_error: true,
    //   };

    // case GET_SINGLE_PRODUCT_BEGIN:
    //   return {
    //     ...state,
    //     single_product_loading: true,
    //     single_product_error: false,
    //   };

    // case GET_SINGLE_PRODUCT_SUCCESS:
    //   return {
    //     ...state,
    //     single_product_loading: false,
    //     single_product: action.payload,
    //   };

    // case GET_SINGLE_PRODUCT_ERROR:
    //   return {
    //     ...state,
    //     single_product_loading: false,
    //     single_product_error: true,
    //   };

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default app_reducer;