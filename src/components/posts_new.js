import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

  renderField(field){
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
           className="form-control"
           type="text"
           {...field.input}
           />
        {field.meta.error}
      </div>
    );
  }

  onSubmit(values){
    console.log(values);
  }

  render(){
    const { handleSubmit } = this.props;

    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
           label="Title For Post"
           name="title"
           component={this.renderField}
           />
        <Field
           label="Categories"
           name="categories"
           component={this.renderField}
           />

        <Field
           label="Post content"
           name="content"
           component={this.renderField}
           />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>

      </form>
    );
  }
}

function validate(values){
  const errors = {};

  if(!values.title){
    errors.title = "Enter a title!";
  }

  if(!values.categories){
    errors.categories = "Enter a categories!";
  }

  if(!values.content){
    errors.content = "Enter a content plz!";
  }

  // If errors is empty there the form is valid
  return errors;
}

export default reduxForm({
  // Name of the form
  validate,
  form: 'PostsNewForm'
})(PostsNew);
