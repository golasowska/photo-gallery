import { OPEN_MODAL, CLOSE_MODAL } from '../actions';

const initialState =  {
    selectedPhoto: null,
    modalIsOpen: false
};

export default function modal(state = initialState, action) {
    switch(action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                modalIsOpen: true,
                selectedPhoto: action.payload
            };
        case CLOSE_MODAL:
            return {
                ...state,
                modalIsOpen: false,
                selectedPhoto: null
            };
        default:
            return state;
    }
}
