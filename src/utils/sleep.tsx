export const sleep = duration =>
  new Promise((resolve, _) => setTimeout(() => resolve(0), duration));
