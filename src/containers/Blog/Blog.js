import React, { Component } from 'react'

import Post from './Post/Post'

import './Blog.css'

class Blog extends Component {

  render() {

    return (
      <div className="Blog">
        <Post />
      </div>
    )

  }

}

export default Blog