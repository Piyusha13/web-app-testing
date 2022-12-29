export const getLocalStorageKey = (key) => {
    return window.localStorage[key];
  };
  
  export const setLocalStorageKey = (key, value) => {
    window.localStorage[key] = value;
    return true;
  };
  
  export const removeLocalStorageKey = (key) => {
    delete window.localStorage[key];
  };