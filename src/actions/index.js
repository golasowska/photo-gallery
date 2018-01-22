import axios from 'axios';

export const DISPLAY_PHOTOS = 'DISPLAY_PHOTOS';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const GET_EXIF = 'GET_EXIF';

const apiKey = '7b6170c348dd41415881242592ddaa4e';


export function fetchPhotos(values, counter){
  const value = values.title;
  const pageNum = counter;
  console.log('page numberrrrrrrr w actions', pageNum);
  return dispatch => {
    axios.get(`https://api.flickr.com/services/rest/?api_key=${apiKey}&method=flickr.photos.search&format=json&nojsoncallback=1&&per_page=50&page=${pageNum}&text=${value}`)
    .then(
      function(response) {
        dispatch({
          type: DISPLAY_PHOTOS,
          payload: response.data.photos.photo
        })
      }
    ).catch(function(error){
      console.log(error.message);
    });
  }
}

export function getExifData(id) {
  return dispatch =>{
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.getExif&api_key=${apiKey}&photo_id=${id}&format=json&nojsoncallback=1`)
    .then(
      function(response) {
        console.log({response});
        dispatch({
          type: GET_EXIF,
          payload: response.data.photo.exif
        })
      }
    ).catch(function(error){
      console.log(error.message);
    });
  }
}

export function openModal (photo){
  return {
    type: OPEN_MODAL,
    payload: photo
  }
}

export function closeModal() {
  return{
    type: CLOSE_MODAL
  }
}
