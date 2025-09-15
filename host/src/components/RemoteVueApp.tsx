import { createRemoteAppComponent } from "@module-federation/bridge-react";

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

const RemoteVueApp = createRemoteAppComponent({
  loader: () => import('careers/Careers'),
  loading: FallbackComp,
  fallback: FallbackErrorComp
});

export default RemoteVueApp;