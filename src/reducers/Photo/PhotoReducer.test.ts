import { ActionType, API_PAGE_LIMIT, INITIAL_STATE } from '@app/constants';
import { PhotoReducer } from '@app/reducers';
import { Photo } from '@app/types';

const ERROR: Error = { name: 'Name', message: 'Message' };
const PLACEHOLDERS: Photo[] = Array.from(new Array(API_PAGE_LIMIT)).map(() => ({} as Photo));
const PHOTO: Photo = {
  albumId: 1,
  id: 1,
  title: 'Test',
  url: 'https://image.url',
  thumbnailUrl: 'https://thumbnail.url',
};

describe('PhotoReducer', () => {
  it('should return no photos', () => {
    expect(
      PhotoReducer(INITIAL_STATE, {
        type: ActionType.FetchPhotosSuccess,
        photos: [],
      }),
    ).toEqual({
      ...INITIAL_STATE,
      photos: [],
    });
  });

  it('should return some photos', () => {
    expect(
      PhotoReducer(INITIAL_STATE, {
        type: ActionType.FetchPhotosSuccess,
        photos: PLACEHOLDERS,
      }),
    ).toEqual({
      ...INITIAL_STATE,
      photos: PLACEHOLDERS,
    });
  });

  it('should return an empty photo', () => {
    expect(
      PhotoReducer(INITIAL_STATE, {
        type: ActionType.FetchPhotoSuccess,
        photo: {} as Photo,
      }),
    ).toEqual({
      ...INITIAL_STATE,
      photo: {},
    });
  });

  it('should return a photo with data', () => {
    expect(
      PhotoReducer(INITIAL_STATE, {
        type: ActionType.FetchPhotoSuccess,
        photo: PHOTO,
      }),
    ).toEqual({
      ...INITIAL_STATE,
      photo: PHOTO,
    });
  });

  it('should return an error', () => {
    expect(
      PhotoReducer(INITIAL_STATE, {
        type: ActionType.FetchError,
        error: ERROR,
      }),
    ).toEqual({
      ...INITIAL_STATE,
      error: ERROR,
    });
  });
});
