import * as types from './actionTypes';
import Api from '../utils/api';


function requestData() {
  return {
    type: types.REQ_DATA,
    loaded: false,
    loading: true
  };
}

function receivedTasks(tasks) {
  return {
    type: types.GET_ALL_TASKS,
    tasks: tasks,
    loaded: true,
    loading: false
  };
}

function saveTask(resp, title, description) {
  return {
    type: types.CREATE_TASK,
    item: { id: resp.id, title, description },
    message: 'Task Created Succesfully',
    loaded: true,
    loading: false
  };
}

function updateTaskById(id, title, description, resp) {
  return {
    type: types.UPDATE_TASK,
    item: { id: id, title: title, description },
    message: resp,
    loaded: true,
    loading: false
  };
}

function removeTask(resp) {
  return {
    type: types.DELETE_TASK,
    id: resp.id,
    message: resp.message,
    loaded: true,
    loading: false
  };
}

function selectTaskItem(id, title, desc) {
  return {
    type: types.EDIT_TASK,
    id: id,
    title: title,
    description: desc,
  };
}

function receiveError(json) {
  return {
    type: types.RECV_ERROR,
    data: json
  };
}

function updateCategory(cat) {
  return {
    type: types.CHANGE_CATEGORY,
    category: cat
  };
}

export function selectTask(id, title, desc) {
  return function (dispatch) {
    dispatch(selectTaskItem(id, title, desc));
  };
}


export function getAllTasks(sign) {
  return function (dispatch) {
    dispatch(requestData());
    return Api.getAllTasks(sign)
        .then((response) => {
          dispatch(receivedTasks(response));
        })
        .catch((err) => {
          dispatch(receiveError(err));
        });
  };
}

export function createTask(title, desc) {
  return function (dispatch) {
    dispatch(requestData());
    return Api.createTask(title, desc)
        .then((response) => {
          dispatch(saveTask(response, title, desc));
        })
        .catch((err) => {
          dispatch(receiveError(err));
        });
  };
}

export function updateTask(id, title, desc) {
  return function (dispatch) {
    dispatch(requestData());
    return Api.updateTask(id, title, desc)
        .then((response) => {
          dispatch(updateTaskById(id, title, desc, response));
        })
        .catch((err) => {
          dispatch(receiveError(err));
        });
  };
}

export function deleteTask(id) {
  return function (dispatch) {
    dispatch(requestData());
    return Api.deleteTask(id)
        .then((response) => {
          dispatch(removeTask(response));
        })
        .catch((err) => {
          dispatch(receiveError(err));
        });
  };
}
