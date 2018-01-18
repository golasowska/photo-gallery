import React from 'react';

export default class ShowPhoto extends React.Component{



  render(){
    const {farm, server, id, secret, title} = this.props.photo;

    let source = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;

    return (
      <div className='photo-list'>
        <div className='photo-item'>
          <img className='' alt={title} src={source}
          onClick={() => this.props.onPhotoSelect(this.props.photo)}/>
        </div>
      </div>
    )
  }
}
