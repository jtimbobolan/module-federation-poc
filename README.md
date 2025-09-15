# Module Federation Multi-Framework PoC

## Overview
This project demonstrates how to use Webpack Module Federation to load and embed multiple front-end applications built with different frameworks (React, Vue, Angular) into a single React-based shell (host) application.

## Project Structure
- `host/` - React shell app (host)
- `home/` - React remote app
- `support/` - React remote app
- `careers/` - Vue remote app
- `about/` - Vue remote app
- `contact/` - Angular remote app

Note: Angular remote app doesn't work for now

## How It Works
- The host app uses Webpack Module Federation to dynamically load remote modules at runtime.
- Each remote app exposes one or more components via its own `webpack.config.js` (or `module-federation.config.js` for Angular).
- The host app provides a launcher UI to switch between embedded remote apps.

## Quick Start
1. **Install nodejs**
   - You can use [volta](https://volta.sh/) to manage your node versions
2. **Install dependencies**
   - In each app folder (`host`, `home`, `support`, `about`, `careers`, `contact`):
     ```
     npm install
     ```
3. **Start remote apps**
   - In each remote app folder, run:
     ```
     npm start
     ```
   - Make sure each remote runs on its configured port (see each `webpack.config.js`).
4. **Start the host app**
   - In `host/`:
     ```
     npm start
     ```
5. **Open the host app**
   - Visit `http://localhost:3000` (or the port configured for the host) in your browser.
   - Use the App Launcher to load and interact with each remote app.
    Note: Please ignore the compile warnings related to css/scss for now, you can close it like a modal.

## Key Files
- `host/src/App.tsx`: Main shell UI, app launcher, and remote embedding logic.
- `host/webpack.config.js`: Host Module Federation setup.
- `[remote]/webpack.config.js`: Remote Module Federation setup and exposes.

## Troubleshooting
- Ensure all apps are running on the correct ports.
- If a remote fails to load, check the browser console and verify the remote's `remoteEntry.js` is accessible.
- Dependency version mismatches can cause runtime errors; align shared dependencies where possible.

## References
- [Module Federation](https://module-federation.io/)
- [Webpack Module Federation](https://webpack.js.org/concepts/module-federation/)
- [React](https://react.dev/)
- [Vue](https://vuejs.org/)
- [Angular](https://angular.io/)

## License

