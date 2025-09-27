import './App.css' 
import { useState } from 'react';
import Employee from './Employee';


function App() {
  const [count, setCount] = useState(0)
  const addCount = () => {
    setCount( count + 1 )
  }
  let employ = [
    { name: 'shefin', age: 24},
    { name: 'steve', age: 54},
    { name: 'Musk', age: 44}
  ]

  return (
    <div className='App'>
      <button onClick={addCount}>Add</button>
        {employ.map((obj, index) => {
          return (
            <Employee key={index} {...obj}/>
          )
        })}
    </div>
  );
}

export default App;


 