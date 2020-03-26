import { match } from 'react-router-dom';

import { Photo } from './model';

export interface GalleryViewProps {
  fetchPhotos: (start: number, limit: number) => void;
  photos: Photo[];
}

export interface GridComponentProps {
  photos: Photo[];
}

export interface LoadMoreComponentProps {
  loading: boolean;
  onLoadMore: () => void;
}

export interface MatchProps extends match {
  params: {
    photo: number;
  };
}

export interface PhotoComponentProps {
  photo: Photo;
  thumbnail?: boolean;
}

export interface PhotoViewProps {
  fetchPhoto: (id: number) => void;
  match: MatchProps;
  photo: Photo;
}
