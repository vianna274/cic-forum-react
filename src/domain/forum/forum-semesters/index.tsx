import React from 'react';
import { Link } from 'react-router-dom';

import { semestersMock } from '../../../utils/mocks/forum.response';
import ForumSemesterDisplay from './forum-semester-display';
import ForumSearch from '../forum-search';

export default function ForumSemesters() {
  return (
    <div className="container-fluid">
      <div className="py-5">
        <ForumSearch />
      </div>
      <div className="row">
        {semestersMock.map((semester, index) =>
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
            key={index}>
            <Link to={`/forum/semester/${semester.id}`}>
              <ForumSemesterDisplay category={semester}></ForumSemesterDisplay>
            </Link>
          </div>)}
      </div>
    </div>
  );
}
