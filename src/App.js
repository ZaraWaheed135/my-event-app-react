import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './Components/NavBar';
import PermanentDrawerLeft from './Components/SideBar';
import SimpleContainer from './Components/Container';
import ResponsiveDrawer from './Components/ResponsiveSideBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Event from './Components/Event';
import AddNewEvent from './Components/AddNewEvent'
function App() {
  return (
    // <div className="App">
    //   <ResponsiveAppBar/>
    //   <PermanentDrawerLeft/>
    //   <SimpleContainer/>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Event />}></Route>
        <Route path="/new" element={<AddNewEvent />}></Route>
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
