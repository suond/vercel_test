import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [fact, setFact] = useState("")

  useEffect(() => {
    const fetchBooks = async () => {
        console.log(import.meta.env.VITE_TEST);
        console.log(import.meta.env.MODE);
        const baseUrl = `/api`

        // const url = `${baseUrl}?page=0&size=9`
        const response = await fetch(baseUrl);

        if (!response.ok) {
            throw new Error('Something went wrong');
        }

        const responseJson = await response.json();

        // const responseData = responseJson._embedded.books;
        setFact(responseJson.fact)
        console.log(responseJson)
      }
      fetchBooks().catch( (error) => {
        console.log(error)
      })

}, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p> Klee's fact says: <br></br>{fact}</p>
        <p>env value: {`${import.meta.env.VITE_VALUE}`}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
