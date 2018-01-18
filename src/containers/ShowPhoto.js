import React from 'react';

export default class ShowPhoto extends React.Component{



  render(){
    const {farm, server, id, secret, title} = this.props.photo;

    let source = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;

    return (
      <div className='text-center card'>
        <div className='text-center'>
          <img className='photo_icon' alt={title} src={source}/>
        </div>
      </div>
    )
  }
}
