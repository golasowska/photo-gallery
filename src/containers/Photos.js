import React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import _ from 'lodash';

import ShowPhoto from './ShowPhoto';

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
  }

  showPhotos = () => {
    return _.map(this.props.data, item => {
      return item.map(photo => {
        return (
          <ShowPhoto
            key={photo.id}
            photo={photo}
            onPhotoSelect={this.props.onPhotoSelect}
          />
        );
      });
    });
  };

  componentDidMount() {
    window.addEventListener('scroll', _.throttle(this.onScroll, 5000), false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll = () => {
    let counter = this.state.counter + 1;
    this.setState({ counter: counter });
    let values = this.props.values;
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
      this.props.data.length
    ) {
      this.props.fetchScrollPhotos(values, this.state.counter);
    }
  };

  render() {
    return <div className="photo-list">{this.showPhotos()}</div>;
  }
}

function mapStateToProps(state) {
  return { data: state.displayPhotos, values: state.form.searchBar.values };
}

export default connect(mapStateToProps, Actions)(Photos);
