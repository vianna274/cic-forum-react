import { ForumPostData, ForumSemester, ForumCourse } from '../../domain/forum/models';

export const postMock: ForumPostData = {
  id: '231',
  title: 'Mock1',
  description: 'Desc 1',
  content: 'Content mockado 1',
  semesterId: '1',
  courseId: '2',
  author: {
    username: 'teste',
    firstName: 'teste',
    lastName: 'teste',
    id: '1',
  },
};

export const postsMock: ForumPostData[] = [
  {
    id: '231',
    title: 'Mock1',
    description: 'Desc 1',
    content: 'Content mockado 1',
    semesterId: '1',
    courseId: '2',
    author: {
      username: 'teste',
      firstName: 'teste',
      lastName: 'teste',
      id: '1',
    },
  },
  {
    id: '232',
    title: 'Mock2',
    description: 'Desc 2',
    content: 'Content mockado 2',
    semesterId: '1',
    courseId: '2',
    author: {
      username: 'teste11',
      firstName: 'teste',
      lastName: 'teste',
      id: '1',
    },
  },
];

export const coursesMock: ForumCourse[] = [
  {
    id: '11',
    title: 'Sei la',
    description: 'duashdsia',
    posts: postsMock,
  },
];

export const semestersMock: ForumSemester[] = [
  {
    id: '1',
    title: 'Primeiro Semestre',
    courses: coursesMock,
    imageUrl: '/assets/img/easy.jpg',
  },
  {
    id: '2',
    title: 'Segundo Semestre',
    courses: coursesMock,
    imageUrl: '/assets/img/medium.jpg',
  },
  {
    id: '3',
    title: 'Terceiro Semestre',
    courses: coursesMock,
    imageUrl: '/assets/img/hard.jpg',
  },
];
