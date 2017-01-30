import * as types from '../actions/actionTypes';


const initialState = {
  selectedTask: {
    id: null,
    title: '',
    description: ''
  },
  tasks: [],
  loaded: true,
  loading: false,
  message: ''
};

export default (state = initialState, action) => {
  switch (action.type) {

    case types.RECV_ERROR:
      return state;

    case types.REQ_DATA:
      return Object.assign({}, state, {
        loading: true,
        message: ''
      });

    case types.GET_ALL_TASKS:
      return Object.assign({}, state, {
        tasks: action.tasks,
        loaded: true
      });

    case types.CREATE_TASK:
      return Object.assign({}, state, {
        tasks: [action.item, ...state.tasks],
        message: action.message,
        loaded: true
      });


    case types.DELETE_TASK:
      return Object.assign({}, state, {
        tasks: state.tasks.filter(item =>
        item.id !== action.id
      ),
        message: action.message,
        loaded: true
      });

    case types.UPDATE_TASK:
      return Object.assign({}, state, {
        tasks: state.tasks.map((item) => {
          if (item.id !== action.item.id) {
            return item;
          }
          return {
            id: action.item.id,
            title: action.item.title,
            description: action.item.description
          };
        }
      ),
        message: action.message,
        loaded: true
      });

    case types.EDIT_TASK:
      return Object.assign({}, state, {
        selectedTask: {
          id: action.id,
          title: action.title,
          description: action.description
        }
      });

    default:
      return state;
  }
};
