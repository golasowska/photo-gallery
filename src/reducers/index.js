import {
  combineReducers
} from 'redux';
import {
  reducer as FormReducer
} from 'redux-form';
import DisplayPhotosReducer from './displayPhotos';
import ModalReducer from './modal';
import ExifReducer from './exif';

const rootReducer = combineReducers({
  form: FormReducer,
  displayPhotos: DisplayPhotosReducer,
  modal: ModalReducer,
  exif: ExifReducer
});

export default rootReducer;
