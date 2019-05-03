import { FloatButtonProps } from '.';

export const NormalOptions = {
  main: {
    icon: 'keyboard_arrow_up',
    color: 'primary',
  },
  options: [
    {
      url: 'profile',
      icon: 'person',
      color: 'secondary'
    },
    {
      url: 'forum',
      icon: 'forum',
      color: 'secondary'
    },
    {
      url: '/',
      icon: 'home',
      color: 'secondary'
    }
  ]
} as FloatButtonProps;
