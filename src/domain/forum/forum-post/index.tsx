import React, { useState, useEffect } from 'react'
import { ForumService } from '../service';
import { ForumPostData } from '../models';
import { Paper } from '@material-ui/core';

export default function ForumPost(props) {
  const { id } = props.match.params;

  const [post, setPost] = useState({} as ForumPostData);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const post = await ForumService.getPost(id);
        setPost(post);
      } catch (err) {
        console.error(err);
      }
    }

    fetchPost();
    // eslint-disable-next-line
  }, []);

  if (!post) return <></>;

  return (
    <div className="container-fluid d-flex justify-content-center">
      <Paper className="col-10 col-sm-8 px-5 py-5">
        <h1>{post.title}</h1>
        <p>{post.description}</p>
        <p>{post.content}</p>
      </Paper>
    </div>
  );

}