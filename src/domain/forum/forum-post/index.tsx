import React, { useState, useEffect } from 'react';
import { ForumService } from '../service';
import { ForumPostData } from '../models';
import { Paper } from '@material-ui/core';
import { toast } from 'react-toastify';
import { ERROR_MESSAGES } from '../../../utils/error/constants';
import { ErrorHandler } from '../../../utils/error/handler';
import { ErrorType } from '../../../utils/error/models';

export default function ForumPost(props) {
  const { id } = props.match.params;

  const [post, setPost] = useState({} as ForumPostData);
  const cancelToken = ForumService.getCancelToken();

  // eslint-disable-next-line
  useEffect(() => () => cancelToken.cancel(), []);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const post = await ForumService.getPost(id, cancelToken);
        setPost(post);
      } catch (err) {
        const type = ErrorHandler.getType(err);

        if (type === ErrorType.CANCELLED) { return; }

        console.error(err);
        toast.error(ERROR_MESSAGES.POST_FETCH);
      }
    };

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
