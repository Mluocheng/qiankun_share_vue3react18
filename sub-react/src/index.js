import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


let root = null;
function render (props) {
    const { container } = props;
    root = root || ReactDOM.createRoot(container ? container.querySelector("#app1") : document.getElementById("app1") );
    root.render(
        <React.StrictMode basename={window.__POWERED_BY_QIANKUN__ ? "/app1" : "/"}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </React.StrictMode>
    );
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap () {
  console.log("[react18] react app bootstraped");
}

export async function mount (props) {
  console.log("[react18] props from main framework", props);
  render(props);
}

export async function unmount (props) {
  root.unmount();
  root = null;
}

reportWebVitals();
