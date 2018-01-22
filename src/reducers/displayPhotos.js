import { DISPLAY_PHOTOS, SCROLL_PHOTOS } from '../actions';

export default function display(state=[], action) {
    // console.log('action payload', action.payload);
  switch(action.type) {
    case DISPLAY_PHOTOS:
    return [action.payload];
    case SCROLL_PHOTOS:
    return [...state, action.payload];
    default: return state;
  }
}
