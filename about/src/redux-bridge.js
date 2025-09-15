// This utility bridges the Redux store from the host (React) to Vue 3 using @module-federation/bridge-vue3
import { createReduxBridge } from '@module-federation/bridge-vue3';

// Import the federated Redux store and actions from the host
import { store } from 'host/store';

// Create a Vue plugin that injects the Redux store
export const reduxBridge = createReduxBridge(store);
