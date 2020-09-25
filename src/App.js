import React, { useState } from 'react';
import './App.css';
import ColorsForm from './components/ColorsForm'

function App() {
  const [colorRGB, setColorRGB] = useState("rgb(255,255,255)");

  return (
    <div style={{backgroundColor: colorRGB}} className="App">
      <ColorsForm colorRGB={colorRGB} setColorRGB={setColorRGB}/>
    </div>
  );
}

export default App;
