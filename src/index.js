import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { store } from './redux/redux-store';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerender = () => {
  root.render(
    <React.StrictMode>
        <App store={store}/>
    </React.StrictMode>
  );
}

rerender(store.getState());

store.subscribe(() => {
  const state = store.getState()
  rerender(state);
});