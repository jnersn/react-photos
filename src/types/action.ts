import { ActionType } from '@app/constants';
import { Photo } from './model';

interface ErrorAction {
  error: Error;
  type: ActionType.FetchError;
}

interface PhotoAction {
  photo: Photo;
  type: ActionType.FetchPhotoSuccess;
}

interface PhotosAction {
  photos: Photo[];
  type: ActionType.FetchPhotosSuccess;
}

export type PhotoActions = PhotoAction | PhotosAction | ErrorAction;
