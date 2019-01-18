export const lazyLoad = (fn: any) => {
  let called = false;
  let ret: any;

  return () => {
    if (!called) {
      called = true;
      ret = fn();
    }

    return ret;
  };
};
