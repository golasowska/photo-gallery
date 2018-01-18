import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import DisplayPhotosReducer from './displayPhotos';
import ModalReducer from './modal';

const rootReducer = combineReducers({
  form: FormReducer,
  displayPhotos: DisplayPhotosReducer,
  modal: ModalReducer

});

export default rootReducer;
