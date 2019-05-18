import { ForumPostData, ForumCourse, ForumCategoryData } from '../../domain/forum/models';

export const postMock: ForumPostData = {
  id: '231',
  title: 'Mock1',
  description: 'Desc 1',
  content: `Vendo esses livros, em ótimo estado:
    Cálculo 1 (Anton): R$ 60,00
    Física 1 (Halliday): R$ 60,00
    Álgebra Linear (Lay): R$ 30,00
    Sistemas Operacionais (Carissimi): R$ 50,00
    Comunicação de Dados (Rochol): R$ 30,00`,
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
    id: '1',
    title: 'INFXXX - Algoritmos e Programação',
    description: 'Cadeira de Algoritmos e Programação',
    posts: postsMock,
  },
  {
    id: '2',
    title: 'INFXXX - Fundamentos de Programação',
    description: 'Cadeira de Fundamentos de Programação',
    posts: postsMock,
  },
  {
    id: '3',
    title: 'INFXXX - Cálculo 1',
    description: 'Cadeira de Cálculo 1',
    posts: postsMock,
  },
  {
    id: '4',
    title: 'INFXXX - Matemática Discreta',
    description: 'Cadeira de Matemática Discreta',
    posts: postsMock,
  },
  {
    id: '5',
    title: 'INFXXX - Arquitetura de Computadores 1',
    description: 'Cadeira de Arquitetura de Computadores 1',
    posts: postsMock,
  },
];

export const categoriesMock: ForumCategoryData[] = [
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
