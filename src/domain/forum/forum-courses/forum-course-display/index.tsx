import './style.scss';

import { Button } from '@material-ui/core';
import React from 'react';

import { ForumCourse } from '../../models';

export interface ForumCourseDisplayProps {
  course: ForumCourse;
}

export default function ForumCourseDisplay({ course }: ForumCourseDisplayProps) {
  return (
    <Button id="course" fullWidth>
      <div className="d-flex flex-column align-items-center">
        <h1 className="title">{course.title}</h1>
        <p className="description">{course.description}</p>
        <p className="length">Posts: {course.posts.length}</p>
      </div>
    </Button>
  );
}
