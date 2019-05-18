import './style.scss';

import { Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { ERROR_MESSAGES } from '../../../utils/error/constants';
import { ErrorHandler } from '../../../utils/error/handler';
import { ErrorType } from '../../../utils/error/models';
import { ForumPostData } from '../models';
import { ForumService } from '../service';

export default function ForumPost(props) {
  const { id } = props.match.params;

  const [post, setPost] = useState(null as ForumPostData);
  const cancelToken = ForumService.getCancelToken();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postResponse = await ForumService.fetchPost(id, cancelToken);
        setPost(postResponse);
      } catch (err) {
        const type = ErrorHandler.getType(err);

        if (type === ErrorType.CANCELLED) { return; }

        console.error(err);
        toast.error(ERROR_MESSAGES.POST_FETCH);
      }
    };

    fetchPost();
    return () => cancelToken.cancel();
    // eslint-disable-next-line
  }, []);

  if (!post) { return <></>; }

  return (
    <div className="container-fluid px-2 d-flex justify-content-center forum-post">
      <Paper className="col-12 col-sm-8 col-md-6 px-2 pt-3 mt-5">
        <h1 className="title text-center pb-2">{post.title}</h1>
        <p className="description">{post.description}</p>
        <p className="content">{post.content}</p>
        <Link to={`/user/${post.author.username}`}>
          <p className="author pb-2">{`Author: ${post.author.username}`}</p>
        </Link>
      </Paper>
    </div>
  );
}
