import AllRoutes from './router/index'
import './App.less'
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <>
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    </>
  )
}
export default App
