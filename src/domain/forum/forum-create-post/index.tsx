import { Button, Paper, TextField } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

import { ApplicationActionType } from '../../../core/application/models';
import { ApplicationContext } from '../../../core/application/reducer';
import { UserContext } from '../../../core/user/reducer';
import { ERROR_MESSAGES } from '../../../utils/error/constants';
import { ErrorHandler } from '../../../utils/error/handler';
import { ErrorType } from '../../../utils/error/models';
import { SUCCESS_MESSAGES } from '../../../utils/messages.constants';
import { ForumService } from '../service';

interface CreatePostState {
  title: string;
  description: string;
  content: string;
}

export default function ForumCreatePost() {

  const { state: userState } = useContext(UserContext);
  const { dispatch: appDispatch } = useContext(ApplicationContext);
  const [redirect, setRedirect] = useState('');
  const [formState, setFormState] = useState({
    title: '', description: '', content: ''
  } as CreatePostState);

  const setLoaded = () => appDispatch({ type: ApplicationActionType.LOADED });
  const setLoading = () => appDispatch({ type: ApplicationActionType.LOADING });

  const cancelToken = ForumService.getCancelToken();

  // eslint-disable-next-line
  useEffect(() => () => cancelToken.cancel(), []);

  const handleChange = (field: keyof CreatePostState, event: React.ChangeEvent) => {
    const inputEvent = event as React.ChangeEvent<HTMLInputElement>;
    const { value } = inputEvent.target;
    setFormState({ ...formState, [field]: value });
  };

  const handleSubmit = async (ev) => {
    try {
      ev.preventDefault();
      setLoading();
      const response = await ForumService.createPost(userState.user, formState, cancelToken);
      toast.success(SUCCESS_MESSAGES.POST_CREATED, { position: toast.POSITION.BOTTOM_LEFT });
      setRedirect(`/forum/post/${response.id}`);
    } catch (error) {
      const type = ErrorHandler.getType(error);

      if (type === ErrorType.CANCELLED) { return; }

      toast.error(ERROR_MESSAGES.POST_CREATE, { position: toast.POSITION.BOTTOM_LEFT });
    } finally {
      setLoaded();
    }
  };

  if (redirect) { return <Redirect to={redirect} />; }

  return (
    <div className="container d-flex justify-content-center">
      <Paper className="col-12 col-sm-8- col-md-6">
        <form className="d-flex flex-column align-items-center"
          onSubmit={ev => handleSubmit(ev)}>
          <TextField
            required
            label="Title"
            className="my-2"
            placeholder="Your title"
            value={formState.title}
            fullWidth
            onChange={ev => handleChange('title', ev)}
          />
          <TextField
            required
            label="Description"
            className="my-2"
            placeholder="Your description"
            value={formState.description}
            fullWidth
            onChange={ev => handleChange('description', ev)}
          />
          <TextField
            required
            label="Content"
            className="my-2"
            placeholder="Your content"
            multiline={true}
            value={formState.content}
            fullWidth
            onChange={ev => handleChange('content', ev)}
          />
          <Button
            className="my-3"
            type="submit"
            color="primary"
            variant="contained">
            Create
          </Button>
        </form>
      </Paper>
    </div>
  );
}
