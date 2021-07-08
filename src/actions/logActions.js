import { GET_LOGS, SET_LOADING, LOGS_ERROR } from "./types";

// export const getLogs = () => {
//   /* Could optionally pass getState */
//   return async (dispatch) => {
//       setLoading();
//       const res = await fetch("/logs");
//       const data = await res.json();
//       dispatch({
//           type: GET_LOGS,
//           payload: data
//       })
//   };
// };

// refactored
export const getLogs = () => async (dispatch) => {
  /* Could optionally pass getState */
  try {
    setLoading();
    const res = await fetch("/logs");
    const data = await res.json();
    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    });
  }
};

// Set loading to True
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
