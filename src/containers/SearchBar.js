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
    this.props.fetchPhotos(values);
  }

  renderTextField = ({ input, label, type, meta: { touched, error }}) => {
    return (
    <fieldset className='form-group'>
      <label className='label-control'>{label}</label>
        <div>
          <input {...input} placeholder={label} className='form-control' type={type} />
          {touched && error && <div className='help-block'>{error}</div>}
        </div>

    </fieldset>)
  }

  render(){
    return<div>
            <div className='container'>
              <div className='col col-md-4'>
                <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
                  <Field name='title' type='text' component={this.renderTextField} label='Searching for...' />
                  <button type='submit' className='btn btn-primary'>Search</button>
                </form>
              </div>
        </div>
      </div>
  }
}

export default connect (null, Actions)(reduxForm({
  form: 'searchBar',
  validate: validate
})(SearchBar));
