import { Dispatch } from 'react';

import { ActionType, API_BASE_URL, API_PAGE_LIMIT, API_PAGE_START, ApiPath } from '@app/constants';
import { Photo, PhotoActions } from '@app/types';
import { Url } from '@app/utils';

export const fetchPhoto = (id: number) => (dispatch: Dispatch<PhotoActions>): void => {
  fetch(Url.toString(API_BASE_URL, `${ApiPath.Photos}/${id}`))
    .then((response: Response) => response.json())
    .then((photo: Photo) => dispatch({ photo, type: ActionType.FetchPhotoSuccess }))
    .catch((error: Error) => dispatch({ error, type: ActionType.FetchError }));
};

export const fetchPhotos = (start: number = API_PAGE_START, limit: number = API_PAGE_LIMIT) => (
  dispatch: Dispatch<PhotoActions>,
): void => {
  fetch(Url.toString(API_BASE_URL, ApiPath.Photos, { _start: start.toString(), _limit: limit.toString() }))
    .then((response: Response) => response.json())
    .then((photos: Photo[]) => dispatch({ photos, type: ActionType.FetchPhotosSuccess }))
    .catch((error: Error) => dispatch({ error, type: ActionType.FetchError }));
};
