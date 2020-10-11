import { useEffect } from "react"

const useClickOutSide = (ref, callback) => {
  const handleClick = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
      console.log(
        '%cClicked out side',
        // Styles
        'background: red; color: white; font-weight: bold'
      );
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, [ref])
}

export default useClickOutSide;