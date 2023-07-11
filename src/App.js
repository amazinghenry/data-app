import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './component/Navbar';
import Home from './component/Home';
import StudentsList from './component/StudentsList';
import StudentDetails from './component/StudentDetails';
import About from './component/About';
import Contact from './component/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <NavBar />
        <Routes>
          <Route path='/' element = {<Home />}> </Route>
          <Route path ="/students" element = {<StudentsList />}> </Route>
          <Route path ="/student/:id" element = {<StudentDetails />}> </Route>
          <Route path ="/about" element = {<About />}> </Route>
          <Route path ="/contact" element = {<Contact />}> </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
