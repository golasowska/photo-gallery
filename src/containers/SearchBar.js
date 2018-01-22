import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as Actions from '../actions';


function validate (values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Please enter some word';
}
  return errors;
};

class SearchBar extends React.Component {

  handleFormSubmit = (values) => {
    const counter = 1;
    this.props.fetchPhotos(values, counter);
  }

  renderTextField = ({ input, label, type, meta: { touched, error }}) => {
    return (
    <fieldset className='form-group'>
      <label className='label-control mt-4'>{label}</label>
        <div>
          <input {...input} placeholder={label} className='form-control' type={type} />
          {touched && error && <div className='help-block'>{error}</div>}
        </div>

    </fieldset>)
  }

  render(){
    return  <div className='row justify-content-center'>
              <div className='col-10 col-sm-6 col-md-4'>
                <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
                  <Field name='title' type='text' component={this.renderTextField} label='Searching for...' />
                  <button type='submit' className='btn btn-primary'>Search</button>
                </form>
              </div>
            </div>
}
}

export default connect (null, Actions)(reduxForm({
  form: 'searchBar',
  validate: validate
})(SearchBar));
