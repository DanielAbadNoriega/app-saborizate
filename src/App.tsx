import Header from './views/Header';
import Home from './views/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home />
    </>
  )
}

export default App
