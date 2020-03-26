import React, { Dispatch } from 'react';
import { connect, MapDispatchToProps } from 'react-redux';

import { fetchPhotos } from '@app/actions';
import { GridComponent, LoadMoreComponent } from '@app/components';
import { API_PAGE_LIMIT, API_PAGE_START } from '@app/constants';
import { AppState } from '@app/reducers';
import { GalleryViewProps, GalleryViewState, Photo, PhotoActions, PhotosState } from '@app/types';

import './GalleryView.scss';

type DP = MapDispatchToProps<{}, GalleryViewProps>;

const PLACEHOLDERS: Photo[] = Array.from(new Array(API_PAGE_LIMIT)).map(() => ({} as Photo));

class GalleryView extends React.Component<GalleryViewProps, GalleryViewState> {
  static readonly defaultProps: GalleryViewProps = {
    fetchPhotos: (): void => {},
    photos: [],
  };

  readonly state: GalleryViewState = {
    loading: true,
    page: 1,
    photos: [],
  };

  readonly placeholders: typeof PLACEHOLDERS = PLACEHOLDERS;

  componentDidMount(): void {
    this.props.fetchPhotos(API_PAGE_START, API_PAGE_LIMIT);
  }

  componentDidUpdate(nextProps: Readonly<GalleryViewProps>): void {
    const currentIds: number[] = this.props.photos.map((photo: Photo) => photo.id);
    const nextIds: number[] = nextProps.photos.map((photo: Photo) => photo.id);
    const commonIds: number[] = currentIds.filter((id: number) => nextIds.includes(id));

    if (this.state.page > 1 && currentIds.length === commonIds.length) {
      return;
    }

    this.setState({
      loading: false,
      page: this.state.page + 1,
      photos: [...this.state.photos, ...this.props.photos],
    });
  }

  onLoadMore(): void {
    this.setState({ loading: true });
    this.props.fetchPhotos(API_PAGE_START + API_PAGE_LIMIT * (this.state.page - 1), API_PAGE_LIMIT);
  }

  render(): React.ReactElement {
    const photos: Photo[] = this.state.photos.length ? this.state.photos : this.placeholders;

    return (
      <div className="gallery">
        <h1>Gallery</h1>
        <GridComponent photos={photos} />
        <LoadMoreComponent loading={this.state.loading} onLoadMore={(): void => this.onLoadMore()} />
      </div>
    );
  }
}

const mapStateToProps = (state: AppState): PhotosState => ({
  error: state.PhotoReducer.error,
  photos: state.PhotoReducer.photos,
});

const mapDispatchToProps = (dispatch: Dispatch<(dispatch: Dispatch<PhotoActions>) => void>): DP => ({
  fetchPhotos: (start: number, limit: number): void => dispatch(fetchPhotos(start, limit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GalleryView);
