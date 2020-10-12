import { useEffect } from "react";

const useKeyPress = (keyTarget, callback) => {
  
  const handleKeyPress = e => {
    if (keyTarget === e.key) callback();
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    }
  }, [])
}

export default useKeyPress;