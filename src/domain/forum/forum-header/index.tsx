import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { postsMock } from '../../../utils/mocks/forum.response';

export default function ForumHeader() {

  const [options, setOptions] = useState();
  const [selectedOption, setSelectedOption] = useState();

  useEffect(() => {
    const posts = postsMock.map((postMock) => {
      const newPost = { value: postMock, label: postMock.title };
      return newPost;
    });
    setOptions(posts);
  }, []);

  return (
    <div className="container-fluid">
      <Select
        options={options}
        onChange={op => setSelectedOption(op)}
        value={selectedOption}></Select>
    </div>
  );
}
