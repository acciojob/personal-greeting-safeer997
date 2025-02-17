import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <input 
        type="text"
        placeholder="Enter your name"
        onChange={handleChange}
      />
       <h1>Hello, {name}!</h1>
    </div>
  );
}

export default App;
