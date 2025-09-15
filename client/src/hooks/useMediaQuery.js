import { useEffect, useState } from 'react';

export function useMediaQuery(query){
  const [match, setMatch] = useState(false);
  useEffect(()=>{
    const mq = window.matchMedia(query);
    const update = () => setMatch(mq.matches);
    update();
    mq.addEventListener ? mq.addEventListener('change', update) : mq.addListener(update);
    return () => {
      mq.removeEventListener ? mq.removeEventListener('change', update) : mq.removeListener(update);
    };
  }, [query]);
  return match;
}
