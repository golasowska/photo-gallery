import React from 'react';
import Modal from 'react-modal';

export default class PhotoModal extends React.Component{
  render(){
    console.log('this props sel photo', this.props.selectedPhoto);
      if (!this.props.selectedPhoto) {
        return<div></div>
      } else {
        const {farm, server, id, secret, title} = this.props.selectedPhoto;
        let source = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
      return (<Modal
        isOpen= { this.props.modalIsOpen}
        onRequestClose = { () => this.props.onRequestClose() } >
          <div>
            <img src={ source } alt={title} />

            <button onClick={() => this.props.onRequestClose()}>close</button>
          </div>
        </Modal>)
      }
  }
}


  // 'http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg'
