import React from 'react';

import { PhotoComponentProps } from '@app/types';

import './PhotoComponent.scss';

export const PhotoComponent = (props: PhotoComponentProps): React.ReactElement => (
  <div className="image">
    <img src={props.thumbnail ? props.photo.thumbnailUrl : props.photo.url} alt={props.photo.title} />
  </div>
);
