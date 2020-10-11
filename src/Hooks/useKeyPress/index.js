import { useEffect } from "react";

const useKeyPress = (keyTarget, callback) => {
  
  const handleKeyPress = e => {
    if (keyTarget === e.key) {
      callback();

      console.log(
        '%cEscape Pressed',
        // Styles
        'background: yellow; font-weight: bold; color: black;'
      );
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    }
  }, [])
}

export default useKeyPress;