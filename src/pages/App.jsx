import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from '../components/header/Header'
import About from './about/About'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="App">
              <header className="App-header">
                <h1>Acceuil</h1>
              </header>
            </div>
          }
        />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
    </Router>
  )
}

export default App
