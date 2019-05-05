import { FloatButtonProps } from '.';

export const NormalOptions = {
  main: {
    icon: 'keyboard_arrow_up',
    color: 'primary',
  },
  options: [
    {
      url: '/profile',
      icon: 'person',
      color: 'secondary'
    },
    {
      url: '/',
      icon: 'home',
      color: 'secondary'
    },
    {
      url: '/forum/create-post',
      icon: 'library_add',
      color: 'secondary'
    },
  ]
} as FloatButtonProps;
