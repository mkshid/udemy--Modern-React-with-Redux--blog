import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';


class PostsShow extends Component {
  componentDidMount(){
    // This is given from route component
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  render(){
    return (
      <div>
        Posts Show
      </div>
    );
  }

}

function mapStateToProps({ posts }, ownProps){
  // first arg is state and second are the props of the function
  // show they have the id of link
  return {post: posts[ownProps.match.params.id]};
}

export default connect(null, { fetchPost })(PostsShow);
