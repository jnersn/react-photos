import { Photo } from './model';

interface ErrorState {
  error: Error;
}

export interface GalleryViewState {
  loading: boolean;
  page: number;
  photos: Photo[];
}

export interface PhotoViewState {
  photo: Photo;
}

export interface PhotoState extends ErrorState {
  photo: Photo;
}

export interface PhotosState extends ErrorState {
  photos: Photo[];
}
