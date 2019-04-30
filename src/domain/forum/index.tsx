import React from 'react';
import { Container } from 'react-bootstrap';

import ForumProvider from './reducer';

export default function Forum() {

  // const { dispatch: appDispatch } = useContext(ApplicationContext);
  // const { dispatch: forumDispatch } = useContext(ForumContext);

  // const setLoaded = () => appDispatch({ type: ApplicationActionType.LOADED });
  // const setLoading = () => appDispatch({ type: ApplicationActionType.LOADING });
  // const setSemesters = (semesters: ForumSemester[]) => forumDispatch({ semesters, type: ForumActionType.SET_SEMESTERS });

  // useEffect(() => { 
  //   const fetchForumData = async () => {
  //     try {
  //       setLoading();
  //       const response = await ForumService.getSemesters();
  //       setSemesters(response);
  //       setLoaded();
  //       return response;
  //     } catch (err) {
  //       // TODO: Mostrar modal de erro
  //       console.error(err);
  //     }
  //     setLoaded();
  //   }
  //   fetchForumData();
  //   // eslint-disable-next-line
  // }, []);

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