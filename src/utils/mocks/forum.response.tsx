import { ForumPost, ForumCategory } from "../../domain/forum/forum.models";

export const postsMock: ForumPost[] = [
  {
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

export const categoriesMock: ForumCategory[] = [
  {
    title: 'Primeiro Semestre',
    description: 'Posts sobre as cadeiras do primeiro semestre',
    posts: postsMock
  }
];