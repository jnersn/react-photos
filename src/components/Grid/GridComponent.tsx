import React from 'react';
import { Link } from 'react-router-dom';

import { PhotoComponent } from '@app/components';
import { GridComponentProps, Photo } from '@app/types';

import './GridComponent.scss';

export const GridComponent = (props: GridComponentProps): React.ReactElement => (
  <ul className="grid">
    {props.photos.map((photo: Photo) => (
      <li key={photo.id || Math.random()}>
        {photo.id && photo.id >= 1 ? (
          <Link to={`/${photo.id}`}>
            <PhotoComponent photo={photo} thumbnail />
          </Link>
        ) : (
          <PhotoComponent photo={photo} thumbnail />
        )}
      </li>
    ))}
  </ul>
);
