import {
  START_FETCHING_PRODUCTS,
  SUCCESS_FETCHING_PRODUCTS,
  ERROR_FETCHING_PRODUCTS,
} from "./constants";

import { getData } from "../../utils/fetch";
import debounce from "debounce-promise";
import { clearNotif } from "../notif/actions";

let debouncedFetchProducts = debounce(getData, 1000);

export const startFetchingProducts = () => {
  return {
    type: START_FETCHING_PRODUCTS,
  };
};

export const successFetchingProducts = ({ products }) => {
  return {
    type: SUCCESS_FETCHING_PRODUCTS,
    products,
  };
};

export const errorFetchingProducts = () => {
  return {
    type: ERROR_FETCHING_PRODUCTS,
  };
};

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(startFetchingProducts());

    try {
      setTimeout(() => {
        dispatch(clearNotif());
      }, 3000);

      let res = await debouncedFetchProducts("/api/alpha/v1/courses");

      dispatch(
        successFetchingProducts({
          products: res.data.data,
        })
      );
    } catch (error) {
      dispatch(errorFetchingProducts());
    }
  };
};
