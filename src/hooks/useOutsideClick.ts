import { useRef, useEffect } from 'react';

export function useOutsideClick ({ handleClose }: { handleClose: () => void }) {
  const ref:any = useRef(null);

  useEffect(() => {
    const handleClick = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handleClose();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [handleClose]);

  return { ref }
}