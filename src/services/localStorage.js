export const getLocalStorage = (name) => JSON.parse(localStorage.getItem(name));

export const setLocalStorage = (name, value) => localStorage
  .setItem(name, JSON.stringify(value));
