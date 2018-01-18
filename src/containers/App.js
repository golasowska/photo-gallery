import React, { Component } from 'react';
import * as Actions from '../actions';
import {connect} from 'react-redux';

import SearchBar from './SearchBar';
import Photos from './Photos';
import PhotoModal from './PhotoModal';

class App extends Component {

  onPhotoSelect = (photo) =>{
    this.props.openModal(photo);
  }

  closeModal=()=>{
    this.props.closeModal()
  }

  render() {
    return (
      <div>
        <SearchBar />
        <Photos onPhotoSelect={ this.onPhotoSelect }/>
        <PhotoModal modalIsOpen= {this.props.modalIsOpen}
          selectedPhoto = {this.props.selectedPhoto}
          onRequestClose = {this.closeModal } />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return{
    modalIsOpen : state.modal.modalIsOpen,
    selectedPhoto: state.modal.selectedPhoto
  }
}

export default connect(mapStateToProps, Actions) (App);
