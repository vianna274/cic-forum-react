import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { ApplicationActionType } from '../../../core/application/models';
import { ApplicationContext } from '../../../core/application/reducer';
import { ERROR_MESSAGES } from '../../../utils/error/constants';
import { ErrorHandler } from '../../../utils/error/handler';
import { ErrorType } from '../../../utils/error/models';
import ForumCourseDisplay from '../forum-courses/forum-course-display';
import { ForumCategoryData } from '../models';
import { ForumService } from '../service';

export default function ForumCategory(props) {
  const { id } = props.match.params;

  const [category, setCategory] = useState(null as ForumCategoryData);
  const { dispatch: appDispatch } = useContext(ApplicationContext);

  const setLoaded = () => appDispatch({ type: ApplicationActionType.LOADED });
  const setLoading = () => appDispatch({ type: ApplicationActionType.LOADING });

  const cancelToken = ForumService.getCancelToken();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading();
        const categoryResponse = await ForumService.fetchCategory(id, cancelToken);
        setCategory(categoryResponse);
      } catch (err) {
        const type = ErrorHandler.getType(err);

        if (type === ErrorType.CANCELLED) { return; }

        console.error(err);
        toast.error(ERROR_MESSAGES.CATEGORY_FETCH);
      } finally {
        setLoaded();
      }
    };

    fetchPost();
    return () => cancelToken.cancel();
    // eslint-disable-next-line
  }, []);

  if (!category) { return <></>; }

  return (
    <div className="container-fluid d-flex align-items-center flex-column">
      <div className="row text-center px-2 py-2 mb-5">
        <h1>{category.title}</h1>
      </div>
      {category.courses.map((course, idx) =>
        <Link to={`/forum/course/${course.id}`} className="row col-12 col-sm-10 col-md-8 col-lg-6 py-3" key={idx}>
          <ForumCourseDisplay course={course} />
        </Link>)
      }
    </div>
  );
}
