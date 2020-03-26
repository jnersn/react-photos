import { combineReducers } from 'redux';

import { PhotosState, PhotoState } from '@app/types';
import { PhotoReducer } from './Photo/PhotoReducer';

export * from './Photo/PhotoReducer';

export interface AppState {
  PhotoReducer: PhotoState & PhotosState;
}

export const reducers = combineReducers({
  PhotoReducer,
});
