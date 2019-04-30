import { ForumPost, ForumSemester, ForumCourse } from "../../domain/forum/models";

export const postsMock: ForumPost[] = [
  {
    id: '231',
    title: 'Mock1',
    description: 'Desc 1',
    content: 'Content mockado 1',
    author: { 
      username: 'teste', 
      firstName: 'teste', 
      lastName: 'teste', 
      birthDay: '1999-01-01' ,
      id: '1'
    }
  },
  {
    id: '232',
    title: 'Mock2',
    description: 'Desc 2',
    content: 'Content mockado 2',
    author: { 
      username: 'teste11', 
      firstName: 'teste', 
      lastName: 'teste', 
      birthDay: '1999-01-01' ,
      id: '1'
    }
  }
]

export const coursesMock: ForumCourse[] = [
  {
    id: '11',
    title: 'Sei la',
    description:  'duashdsia',
    posts: postsMock
  }
];

export const semestersMock: ForumSemester[] = [
  {
    id: '233',
    title: 'Primeiro Semestre',
    courses: coursesMock
  }
];