import React from 'react';
import { Link } from 'react-router-dom';

import { categoriesMock } from '../../../utils/mocks/forum.response';
import ForumSearch from '../forum-search';
import ForumCategoryDisplay from './forum-category-display';

export default function ForumCategories() {
  return (
    <div className="container-fluid">
      <div className="mb-5">
        <ForumSearch />
      </div>
      <div className="row">
        {categoriesMock.map((category, index) =>
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
            key={index}>
            <Link to={`/forum/category/${category.id}`}>
              <ForumCategoryDisplay category={category}></ForumCategoryDisplay>
            </Link>
          </div>)}
      </div>
    </div>
  );
}
