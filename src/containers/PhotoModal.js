import React from 'react';
import Modal from 'react-modal';
import DisplayExif from './DisplayExif';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)'
  },
  content: {
    position: 'absolute',
    top: '40px',
    left: '40px',
    right: '40px',
    bottom: '40px',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px'
  }
}

export default class PhotoModal extends React.Component {
  render() {
    if (!this.props.selectedPhoto) {
      return <div></div>
    } else {
      const {farm, server, id, secret, title} = this.props.selectedPhoto;
      let source = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
      return (
        <Modal isOpen={this.props.modalIsOpen} style={customStyles} ariaHideApp={false} onRequestClose= { () => this.props.onRequestClose() }>
          <div className='photo-modal'>
            <div className='text-center'>
              <img className='photo-in-modal col col-md-8' src={source} alt={title}/>
            </div>
            <div className='text-center mt-4'>
              <button className='btn btn-primary mb-3' onClick={() => this.props.onRequestClose()}>close</button>
            </div>
            <div>
              {(this.props.exif)
                ? (<DisplayExif exif={this.props.exif}/>)
                : null}
            </div>
          </div>
        </Modal>
      )
    }
  }
}
