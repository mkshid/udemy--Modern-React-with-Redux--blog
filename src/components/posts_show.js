import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost } from '../actions';


class PostsShow extends Component {
  componentDidMount(){
    // This is given from route component
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  render(){
    const { post } = this.props;

    if (!post){
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back to Index</Link>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }

}

function mapStateToProps({ posts }, ownProps){
  // first arg is state and second are the props of the function
  // show they have the id of link
  return {post: posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);
