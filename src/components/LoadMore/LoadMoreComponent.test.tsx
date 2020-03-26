import { shallow } from 'enzyme';
import * as React from 'react';

import { LoadMoreComponent } from '@app/components';
import { Text } from '@app/constants';
import { LoadMoreComponentProps } from '@app/types';

const props: LoadMoreComponentProps = {
  loading: false,
  onLoadMore: () => {},
};

describe('LoadMoreComponent', () => {
  it('should be loading', () => {
    const component = shallow(<LoadMoreComponent {...props} loading />);

    expect(component.find('button').prop('className')).toEqual('loading');
    expect(component.find('button').text()).toEqual(Text.Loading);
  });

  it('should not be loading', () => {
    const component = shallow(<LoadMoreComponent {...props} />);

    expect(component.find('button').prop('className')).toEqual('');
    expect(component.find('button').text()).toEqual(Text.LoadMore);
  });
});
