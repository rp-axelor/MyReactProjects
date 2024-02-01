import { useReducer} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const initialState = 0;

  const reducer = (count, action)=> {
    
    if(action.type === "INCREMENT")
    {
      return count + 1
    }
    if(action.type === "DECREMENT")
    {
      return count - 1
    }
    return count
  }

  const [count, dispatch] = useReducer(reducer, initialState)

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
        <button onClick={() => dispatch({type: 'INCREMENT'})}>
          INC: count is {count}
        </button>
        <button onClick={() => dispatch({type: 'DECREMENT'})}>
          DEC: count is {count}
        </button>
        
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
