import React, { useState } from 'react';
import logo from './logo.svg';
import './App.sass';
import CodeMirror, { Extension } from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { postExecScript, IExecScriptRequest } from './Services/AppService';


const langs: Record<string, any> = { python };

function App() {
  const [script, setScript] = useState('');
  const [result, setResult] = useState<Array<any>>([]);
  const [extensions] = useState<Extension[]>(langs.python);

  const handleRunBtn = async () => {
    const paypload: IExecScriptRequest = {
      script: script
    }
    const resp = await postExecScript(paypload);
    let shellResult = [];

    if (resp.data && resp.data.length > 0) {
      for (let i = 0; i < resp.data.length; i++) {
        shellResult.push(resp.data[i]);
      }
    } else {

      // Add error message into shell panel
      shellResult = [];
      shellResult.push(resp.error);
    }
    setResult(shellResult);
  };

  const handleClearScriptBtn = () => {
    setScript('');
  }

  const handleClearShellBtn = () => {
    setResult([]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">
          CycAI Home challange
        </h1>
        <p className="content">Author: VickNguyen </p>
      </header>
      <div className="Sidebar-wrapper">
        <div className='Sidebar-left'>
          <div className="Sidebar-topbar">
            <div className="File-name">main.py</div>
            <div className='Btn-wrapper'>
              <button className='Run-btn' onClick={handleRunBtn}>RUN</button>
              <button className='Clear-btn' onClick={handleClearScriptBtn}>Clear</button>
            </div>
          </div>
          <div>
            <CodeMirror
              value={script}
              theme="dark"
              extensions={[extensions]}
              className="codemirror"
              onChange={(value, viewUpdate) => {
                setScript(value);
              }}
            />
          </div>
        </div>
        <div className='Sidebar-right'>
          <div className="Sidebar-topbar">
            <p className="Shell-name">Shell</p>
            <button className='Clear-btn' onClick={handleClearShellBtn}>Clear</button>
          </div>
          <div className='Shell-panel'>
            <table>
              <tbody>
                {result && result.map(r =>
                  <tr>
                    <td>{r}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
