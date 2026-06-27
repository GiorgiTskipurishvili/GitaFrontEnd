import './App.css'
import ToDoCard from './components/ToDoCard'

function App() {

  return (
    <>
      <main>
        <div className="title-todo">
          <h1>Todo</h1>
        </div>
        <div>
          <ToDoCard />
        </div>
      </main>
    </>
  )
}

export default App
