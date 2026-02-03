
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// #region agent log
fetch('http://127.0.0.1:7243/ingest/3546312d-2b7a-4d7c-86c5-b3b2cdc98a8a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'index.tsx:6',message:'Index.tsx script loaded',data:{},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'A'})}).catch(()=>{});
// #endregion

const rootElement = document.getElementById('root');

// #region agent log
fetch('http://127.0.0.1:7243/ingest/3546312d-2b7a-4d7c-86c5-b3b2cdc98a8a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'index.tsx:12',message:'Root element lookup',data:{found:!!rootElement},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'A'})}).catch(()=>{});
// #endregion

if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

try {
  const root = ReactDOM.createRoot(rootElement);
  // #region agent log
  fetch('http://127.0.0.1:7243/ingest/3546312d-2b7a-4d7c-86c5-b3b2cdc98a8a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'index.tsx:21',message:'ReactDOM.createRoot succeeded',data:{},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'B'})}).catch(()=>{});
  // #endregion
  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  
  // #region agent log
  fetch('http://127.0.0.1:7243/ingest/3546312d-2b7a-4d7c-86c5-b3b2cdc98a8a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'index.tsx:31',message:'root.render called',data:{},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'B'})}).catch(()=>{});
  // #endregion
} catch (err) {
  // #region agent log
  fetch('http://127.0.0.1:7243/ingest/3546312d-2b7a-4d7c-86c5-b3b2cdc98a8a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'index.tsx:36',message:'Error in ReactDOM render',data:{error:String(err)},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'B'})}).catch(()=>{});
  // #endregion
  throw err;
}
