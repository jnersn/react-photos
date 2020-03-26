import React from 'react';

import { Text } from '@app/constants';
import { LoadMoreComponentProps } from '@app/types';

import './LoadMoreComponent.scss';

export const LoadMoreComponent = (props: LoadMoreComponentProps): React.ReactElement => (
  <div className="load-more">
    <button className={props.loading ? 'loading' : ''} onClick={(): void => props.onLoadMore()}>
      {props.loading ? Text.Loading : Text.LoadMore}
    </button>
  </div>
);
