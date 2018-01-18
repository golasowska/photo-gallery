import React from 'react';
import { connect } from 'react-redux';


import ShowPhoto from './ShowPhoto';

class Photos extends React.Component {

  showPhotos=()=>{
    console.log('propsy', this.props.data);
    return this.props.data.map( photo => {
      return <ShowPhoto key={photo.id} photo={photo} />
    })
  }

  render(){
    return(
      <div>
        {this.showPhotos()}
      </div>
    )
  }
}

function mapStateToProps(state){
  console.log('stejt', state.displayPhotos);
  return{
    data: state.displayPhotos
  }
}

export default connect(mapStateToProps, null) (Photos);
