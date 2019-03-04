import * as actionTypes from '../constants/actionTypes';

export function closeModal() {
    return {
        type: actionTypes.CLOSE_MODAL
    };
}

export function openModal(modalType) {
    return {
        type: actionTypes.OPEN_MODAL,
        payload: modalType
    };
}