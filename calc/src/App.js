import React, { useState } from 'react';
import './App.css';
import Button from './Components/Button';
import Input from './Components/Input';
import * as math from "mathjs";

function App() {

  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addText = (val) => {
    setText((text) => [...text, val + ""]);
  }

  const clearData = ()=>{
    setResult("");
    setText("");
  }

  const resultData = ()=>{
    const input = text.join("");
    setResult(math.evaluate(input));
  }

  const btnColor = "#f2a33c";

  return (
    <>
      <div className='main'>
        <div className='calc'>
          <Input text={text} result={result} />
          <div className='row'>
            <Button symbol="7" handleClick={addText}/>
            <Button symbol="8" handleClick={addText}/>
            <Button symbol="9" handleClick={addText}/>
            <Button symbol="/" handleClick={addText} color={btnColor} />
          </div>
          <div className='row'>
            <Button symbol="4" handleClick={addText}/>
            <Button symbol="5" handleClick={addText}/>
            <Button symbol="6" handleClick={addText}/>
            <Button symbol="*" handleClick={addText} color={btnColor} />
          </div>
          <div className='row'>
            <Button symbol="1" handleClick={addText}/>
            <Button symbol="2" handleClick={addText}/>
            <Button symbol="3" handleClick={addText}/>
            <Button symbol="-" handleClick={addText} color={btnColor}/>
          </div>
          <div className='row'>
            <Button symbol="0" handleClick={addText}/>
            <Button symbol="." handleClick={addText}/>
            <Button symbol="%" handleClick={addText} color={btnColor}/>
            <Button symbol="+" handleClick={addText} color={btnColor}/>
          </div>
          <div className='row'>
            <button className='clear'onClick={clearData}>Clear</button>
            <button className='equal'onClick={resultData}>=</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
