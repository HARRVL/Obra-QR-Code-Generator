import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="Company-name">
          OBRA
        </div>
        <h1>QR Code Generator</h1>
        <input 
          type="text" 
          placeholder="Enter URL"
          value={inputText} 
          onChange={(e) => setInputText(e.target.value)} 
        />
        {inputText && (
          <div className="QRCode-container">
            <QRCode value={inputText} />
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
