import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG } from "./types";

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

// refactored - Get logs from server
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

// Add new log
export const addLog = (log) => async (dispatch) => {
  /* Could optionally pass getState */
  try {
    setLoading();
    const res = await fetch("/logs/", {
      method: "POST",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    dispatch({
      type: ADD_LOG,
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
