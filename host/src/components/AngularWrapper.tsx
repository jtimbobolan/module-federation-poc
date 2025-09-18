/* import React, { useState, useEffect } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'my-angular-element': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}




function AngularWrapper(props: any) {
  const [elementReady, setElementReady] = useState(false);

  useEffect(() => {
    let script: HTMLScriptElement | null = document.querySelector('script[src="http://localhost:3005/remoteEntry.js"]');
    let loaded = false;
    const checkElement = () => {
      if (customElements.get('my-angular-element')) {
        setElementReady(true);
        loaded = true;
      }
    };

    if (!script) {
      script = document.createElement('script');
      script.src = 'http://localhost:3005/remoteEntry.js';
      script.type = 'text/javascript';
      script.async = true;
      script.onload = checkElement;
      document.body.appendChild(script);
    } else {
      checkElement();
    }

    // Poll in case custom element is registered asynchronously
    const interval = setInterval(() => {
      if (!loaded) checkElement();
    }, 100);

    return () => {
      clearInterval(interval);
      // Optionally remove script if you want to clean up
      // if (script) document.body.removeChild(script);
    };
  }, []);

  return elementReady ? <my-angular-element {...props}></my-angular-element> : <div>Loading Contact...</div>;
}

export default AngularWrapper; */

import React, { useState, useEffect } from 'react';
import { mount } from "angularRemoteApp/angularRemoteApp";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'app-root': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

const AngularWrapper = () => {
  useEffect(() => {
    mount();
  }, []);   
  return <div className="angular-remote-app"><app-root></app-root></div>;
};

export default AngularWrapper;
