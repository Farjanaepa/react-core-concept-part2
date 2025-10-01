
import './App.css'
import Batsman from './Batsman'
import Counter from './Counter'

function App() {
 

function handleClick() {
  alert("I am clicked.")
}

  return (
    <>
     <h3>React part 2</h3>
<Counter></Counter>
     <button onClick={handleClick}>Click me</button>

     <Batsman></Batsman>

    
    </>
  )
}

export default App
