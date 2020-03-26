import { shallow } from 'enzyme';
import * as React from 'react';

import { PhotoComponent } from '@app/components';
import { Photo, PhotoComponentProps } from '@app/types';

const props: PhotoComponentProps = {
  photo: {
    url: 'https://photo.url',
    thumbnailUrl: 'https://thumbnail.url',
    title: 'Title',
  } as Photo,
};

describe('PhotoComponent', () => {
  it('should display a full sized photo', () => {
    const component = shallow(<PhotoComponent {...props} />);

    expect(component.find('img').prop('src')).toEqual(props.photo.url);
    expect(component.find('img').prop('alt')).toEqual(props.photo.title);
  });

  it('should display a thumbnail photo', () => {
    const component = shallow(<PhotoComponent {...props} thumbnail />);

    expect(component.find('img').prop('src')).toEqual(props.photo.thumbnailUrl);
    expect(component.find('img').prop('alt')).toEqual(props.photo.title);
  });
});
