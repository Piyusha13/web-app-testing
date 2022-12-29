export const wait = (time = 3000) => {
    return new Promise(resolve => {
      setTimeout(resolve, time);
    })
  };
  
  export const executeAfterDelay = async (callback, time = 3000) => {
    await wait(time);
    callback();
  };
  
  export const executeAfterInterval = async (callback, count, duration = 1000) => {
    const interval = setInterval(() => {
      if (count <= 0) {
        clearInterval(interval);
      } else {
        callback(count);
        count--;
      }
    }, duration);
  };