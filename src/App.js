import './App.css' 
import Header from './components/Header'

function App() {
  const data = 'shefin'
  return (
    <div>
      <h1 className='hello'>Hello world</h1>
      <Header data ={data}/>
      <p>This is sample description { data}</p>
    </div>
  );
}

export default App;


function Hello(){
  return <h1 className='hello'> Hello </h1>
}