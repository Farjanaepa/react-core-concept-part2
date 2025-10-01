
import { Suspense } from 'react'
import './App.css'
import Batsman from './Batsman'
import Counter from './Counter'
import Users from './Users'
import Friends from './Friends'

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
.then(res=> res.json())

const fetchFriends = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

function App() {
 const friendsPromise = fetchFriends();

function handleClick() {
  alert("I am clicked.")
}

  return (
    <>
<Suspense fallback={<h3>Loading...</h3>}>
  <Users fetchUsers={fetchUsers}></Users>
</Suspense>
<Suspense fallback={<h3>Friends are coming...</h3>}>
    <Friends friendsPromise={friendsPromise}></Friends>
</Suspense>
    
     <h3>React part 2</h3>
<Counter></Counter>
     <button onClick={handleClick}>Click me</button>

     <Batsman></Batsman>

    
    </>
  )
}

export default App
