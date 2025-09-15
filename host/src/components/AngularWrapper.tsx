import { useEffect, useRef } from 'react';

// This component mounts the Angular remote app into a div using the exposed bootstrap function
const AngularWrapper = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    let mounted = true;
    // Dynamically import the remote bootstrap function
    // @ts-ignore
    import('contact/ContactApp').then((mod) => {
      if (mounted && ref.current && typeof mod.default === 'function') {
        // Call the bootstrap function with the container element
        const maybeCleanup = mod.default(ref.current);
        if (typeof maybeCleanup === 'function') cleanup = maybeCleanup;
      }
    });
    return () => {
      mounted = false;
      if (cleanup) cleanup();
    };
  }, []);

  return <div ref={ref} style={{ minHeight: 400 }} />;
};

export default AngularWrapper;
