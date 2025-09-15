
import { useEffect, useRef } from 'react';

export const VueWrapper = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    import('about/AboutReact').then((mountVue) => {
      cleanup = mountVue.default(containerRef.current);
    });
    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return <div ref={containerRef}></div>;
};

export default VueWrapper;
