import './App.css'
import ThemeToggle from './assets/Components/ToggleDarkMode'

function App() {

  return (
    <>
      <section className=' p-3'>
        <h2 className=' bg-blue-400 text-white text-xl dark:bg-black dark:text-red-500'>Saktrix Showcase</h2>
        
          <ThemeToggle/>
        
      </section>
    </>
  )
}

export default App
