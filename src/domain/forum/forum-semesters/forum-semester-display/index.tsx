import React from 'react';

import './style.scss';
import { ForumSemester } from '../../models';

export interface ForumCategoryProps {
  category: ForumSemester;
}

export default function ForumSemesterDisplay({ category }: ForumCategoryProps) {
  return (
    <div className="category">
      <img className="image" src={category.imageUrl} alt={`Click to access ${category.title}`}></img>
      <span className="label">{category.title}</span>
    </div>
  );
}
