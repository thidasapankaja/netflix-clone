import {
  FETCH_SHOWS_BEGINS,
  FETCH_SHOWS_FAILURE,
  FETCH_SHOWS_SUCCESS,
} from '../constatnts/actionTypes';

const initialMainShowState = {
  show: {},
  loading: false,
  error: null,
};

export default function(state = initialMainShowState, action) {
  switch (action.type) {
    case FETCH_SHOWS_BEGINS:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case FETCH_SHOWS_SUCCESS:
      return {
        ...state,
        loading: false,
        show: action.payload,
      };
    case FETCH_SHOWS_FAILURE:
      return {
        ...state,
        loading: false,
        show: {},
        error: action.payload,
      };
    default:
      return state;
  }
}
