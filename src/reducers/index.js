import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import DisplayPhotosReducer from './displayPhotos';

const rootReducer = combineReducers({
  form: FormReducer,
  displayPhotos: DisplayPhotosReducer
});

export default rootReducer;
