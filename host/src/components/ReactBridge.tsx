import { createRemoteAppComponent } from "@module-federation/bridge-react";
import { loadRemote } from "@module-federation/runtime"; // Adjust the import path as needed

const FallbackComp = <div data-test-id="loading">loading...</div>;

const FallbackErrorComp = (info: any) => {
  return (
    <div>
      <h2>This is ErrorBoundary Component</h2>
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{info?.error.message}</pre>
      <button onClick={() => info.resetErrorBoundary()}>
        resetErrorBoundary(try again)
      </button>
    </div>
  );
};

const ReactBridge = createRemoteAppComponent({
  loader: () => import('support/Support'),
  loading: FallbackComp,
  fallback: FallbackErrorComp
});

export default ReactBridge;