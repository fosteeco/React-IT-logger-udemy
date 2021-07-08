import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
} from "./types";

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

// Delete Log
export const deleteLog = (id) => async (dispatch) => {
  /* Could optionally pass getState */
  try {
    setLoading();
    const res = await fetch(`/logs/${id}`, {
      method: "DELETE",
    });
    dispatch({
      type: DELETE_LOG,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    });
  }
};

// Update log on server
export const updateLog = (log) => async (dispatch) => {
  /* Could optionally pass getState */
  try {
    setLoading();
    const res = await fetch(`/logs/${log.id}`, {
      method: "PUT",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    dispatch({
      type: UPDATE_LOG,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    });
  }
};

// Set current log
export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};
// Clear current log
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};
// Set loading to True
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
