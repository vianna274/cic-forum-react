import './style.scss';

import { Button } from '@material-ui/core';
import React from 'react';

import { ForumCourse } from '../../models';

export interface ForumCourseDisplayProps {
  course: ForumCourse;
}

export default function ForumCourseDisplay({ course }: ForumCourseDisplayProps) {
  return (
    <div className="container forum-course-display">
      <div className="row align-items-center">
        <div className="col-2 overflow-hidden course-icon px-0">
          <img className="pr-2" src="/assets/img/fire.jpg" />
        </div>
        <div className="col-10">
          <Button id="course" fullWidth>
            <div className="d-flex flex-column align-items-center">
              <h3 className="title">{course.title}</h3>
              <p className="description">{course.description}</p>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
