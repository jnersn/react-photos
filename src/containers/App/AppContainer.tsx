import React from 'react';
import { Route, Switch } from 'react-router-dom';

import GalleryView from '../../views/Gallery/GalleryView';
import PhotoView from '../../views/Photo/PhotoView';

import './AppContainer.scss';

export const AppContainer = (): JSX.Element => (
  <div className="app">
    <Switch>
      <Route path="/:photo">
        <PhotoView />
      </Route>
      <Route path="/">
        <GalleryView />
      </Route>
    </Switch>
  </div>
);
