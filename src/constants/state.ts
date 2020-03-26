import { Photo, PhotosState, PhotoState } from '@app/types';

export const INITIAL_STATE: PhotoState & PhotosState = {
  error: {} as Error,
  photo: {} as Photo,
  photos: [],
};
