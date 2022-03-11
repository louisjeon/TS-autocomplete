let timer: ReturnType<typeof setTimeout>;

const debounce = (func: () => void, time: number) => {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(func, time);
};

export default debounce;
