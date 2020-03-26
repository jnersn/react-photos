import { ActionType, INITIAL_STATE } from '@app/constants';
import { PhotoActions, PhotosState, PhotoState } from '@app/types';

export const PhotoReducer = (state = INITIAL_STATE, action: PhotoActions): PhotoState | PhotosState => {
  switch (action.type) {
    case ActionType.FetchPhotosSuccess:
      return {
        ...state,
        photos: action.photos,
      };
    case ActionType.FetchPhotoSuccess:
      return {
        ...state,
        photo: action.photo,
      };
    case ActionType.FetchError:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
