import {
  GET_EXIF
} from '../actions';

export default function exif(state = [], action) {
  switch (action.type) {
    case GET_EXIF:
      return action.payload;
    default:
      return state;
  }
}
