import axios from 'axios';

export const DISPLAY_PHOTOS = 'DISPLAY_PHOTOS';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

const apiKey = '7b6170c348dd41415881242592ddaa4e';


export function fetchPhotos(values){
  const value = values.title;
  const pageNum = 1;
  return dispatch => {
    axios.get(`https://api.flickr.com/services/rest/?api_key=${apiKey}&method=flickr.photos.search&format=json&nojsoncallback=1&&per_page=50&page=${pageNum}&text=${value}`)
    .then(
      function(response) {
        console.log({response});
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
