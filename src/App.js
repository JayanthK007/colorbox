import { useState } from "react";
import Input from "./Input";
import Inputcolor from "./Inputcolor";


function App() {

  const [colorValue,setColorValue]=useState('');
  const [hexValue, setHexValue]=useState('');
  const [isDark,setIsDark]=useState(true);
  return (
    <div className="App">
    <Inputcolor 
      colorValue={colorValue}
      hexValue={hexValue}
      isDark={isDark}
    />
      <Input 
      colorValue={colorValue}
      setColorValue={setColorValue} 
        setHexValue={setHexValue}
        isDark={isDark}
        setIsDark={setIsDark}
      />
    </div>
  );
}

export default App;
