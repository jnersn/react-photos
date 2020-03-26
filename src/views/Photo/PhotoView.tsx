import React, { Dispatch } from 'react';
import { connect, MapDispatchToProps } from 'react-redux';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

import { fetchPhoto } from '@app/actions';
import { PhotoComponent } from '@app/components';
import { Text } from '@app/constants';
import { AppState } from '@app/reducers';
import { MatchProps, Photo, PhotoActions, PhotoState, PhotoViewProps, PhotoViewState } from '@app/types';

import './PhotoView.scss';

type DP = MapDispatchToProps<{}, PhotoViewProps>;

class PhotoView extends React.PureComponent<PhotoViewProps & RouteComponentProps, PhotoViewState> {
  static defaultProps: PhotoViewProps = {
    fetchPhoto: (): void => {},
    match: {} as MatchProps,
    photo: {} as Photo,
  };

  readonly state: PhotoViewState = {
    photo: {} as Photo,
  };

  componentDidMount(): void {
    this.props.fetchPhoto(this.props.match.params.photo);
  }

  componentDidUpdate(): void {
    this.setState({ photo: this.props.photo });
  }

  render(): React.ReactElement {
    return (
      <div className="photo">
        <h1>
          <Link to="/">{Text.Gallery}</Link> / {Text.Photo} {this.props.match.params.photo}
        </h1>
        <PhotoComponent photo={this.state.photo} />
        <div className="title">
          <h2>{this.state.photo.title}</h2>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState): PhotoState => ({
  error: state.PhotoReducer.error,
  photo: state.PhotoReducer.photo,
});

const mapDispatchToProps = (dispatch: Dispatch<(dispatch: Dispatch<PhotoActions>) => void>): DP => ({
  fetchPhoto: (id: number): void => dispatch(fetchPhoto(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhotoView));
