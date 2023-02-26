// React is a javaScript library for building user interfaces.
import React from 'react';
// The react module is an entry point to the React library, while react-dom provides access to DOM-specific methods.
// react-dom/client is specific to rendering react on the client side
import ReactDOM from 'react-dom/client';
import App from './App';
// import "bootstrap/dist/css/bootstrap.min.css";


// ReactDOM.createRoot lets you create a root to display React components inside a browser DOM node.
// root.render takes a React component, or tree of React components and (eventually) renders them to the DOM.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // StrictMode is a React Developer Tool, primarily used to identify potential issues in a web application.
    // For its descendant components, it activates additional deprecation checks and warnings. The fact that it gives
    // visual feedback (warning/error messages) whenever the React rules and suggested practices are not followed is
    // one of the reasons for its popularity. The React StrictMode Component, like the React Fragment, does not render
    // any visible UI.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
