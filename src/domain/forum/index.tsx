import React, { useContext, useEffect } from 'react';
import { Container } from 'react-bootstrap';

import { ApplicationActionType } from '../../core/application/application.models';
import { ApplicationContext } from '../../core/application/application.state';
import { ForumActionType, ForumCategory } from './forum.models';
import { ForumService } from './forum.service';
import ForumProvider, { ForumContext } from './forum.state';

export default function Forum() {

  const { dispatch: appDispatch } = useContext(ApplicationContext);
  const { state, dispatch: forumDispatch } = useContext(ForumContext);

  const setLoaded = () => appDispatch({ type: ApplicationActionType.LOADED });
  const setLoading = () => appDispatch({ type: ApplicationActionType.LOADING });
  const setCategories = (categories: ForumCategory[]) => forumDispatch({ categories, type: ForumActionType.SET_CATEGORIES });

  useEffect(() => { 
    const fetchForumData = async () => {
      try {
        setLoading();
        const response = await ForumService.getCategories();
        setCategories(response);
        setLoaded();
        return response;
      } catch (err) {
        // TODO: Mostrar modal de erro
        console.error(err);
      }
      setLoaded();
    }
    fetchForumData();
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <ForumProvider>
        <h1>Forum Header</h1>
        <h1>Forum Categories</h1>
        <h1>Forum News</h1>
      </ForumProvider>
    </Container>
  );
}