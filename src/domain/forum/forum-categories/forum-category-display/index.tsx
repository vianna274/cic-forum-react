import React from 'react';

import './style.scss';
import { ForumCategoryData } from '../../models';

export interface ForumCategoryProps {
  category: ForumCategoryData;
}

export default function ForumCategoryDisplay({ category }: ForumCategoryProps) {
  return (
    <div className="category">
      <img className="image" src={category.imageUrl} alt={`Click to access ${category.title}`}></img>
      <span className="label">{category.title}</span>
    </div>
  );
}
