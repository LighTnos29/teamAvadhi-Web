import Navbar from './components/Navbar'
import './App.css'
import AllRoutes from './routes/AllRoutes'
import { BrowserRouter as Router } from 'react-router-dom';
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { motion, } from "framer-motion";
import Footer from './components/Footer';


function App() {

  return (
    <ReactLenis root>
      <motion.div>
        <Router>
          <Navbar />
          <AllRoutes />
          <Footer/>
        </Router>
      </motion.div>
    </ReactLenis >
  )
}

export default App
