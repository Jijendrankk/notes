import { useEffect } from 'react';

function useOutsideClick(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      // Check if the click is outside the ref element
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

export default useOutsideClick;
