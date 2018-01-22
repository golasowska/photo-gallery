import React from 'react';

export default class DisplayExif extends React.Component{

  renderTd=()=>{
    console.log('this props exif w display exif', this.props.exif);
    return this.props.exif.map( (td, index) => {
      return (<tr key={index} className='col-md-8'>
        <td>{td.label}</td>
        <td>{td.raw._content}</td>
        </tr>)
    })
  }

  render(){
    return <div className='col col-md-8 mx-auto'>
              <table className='table-hover table table-sm table-bordered table-striped'>
              <thead>
                <tr className='col-md-8'>
                  <th colSpan='2' >Exchangeable Image File Format data</th>
                </tr>
              </thead>
              <tbody>
                  {this.renderTd()}
              </tbody>
            </table>
          </div>
  }
}
