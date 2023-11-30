import React, { useRef , useState } from 'react';
import QRCode from 'qrcode.react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const qrRef = useRef();

  const copyToClipboard = () => {
    const canvas = qrRef.current.querySelector('canvas');
    canvas.toBlob(blob => {
      const item = new ClipboardItem({ 'image/png': blob });
      navigator.clipboard.write([item]);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="Company-name">
          OBRA
        </div>
        <h1>QR Code Generator</h1>
        <input 
          type="text" 
          placeholder="Paste URL"
          value={inputText} 
          onChange={(e) => setInputText(e.target.value)} 
        />
        {inputText && (
          <div className="QRCode-container" ref={qrRef}>
            <QRCode value={inputText} />
            <button onClick={copyToClipboard} className="Copy-button">Copy</button>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
