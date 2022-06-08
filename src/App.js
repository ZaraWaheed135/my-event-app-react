import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './Components/NavBar';
import PermanentDrawerLeft from './Components/SideBar';
import SimpleContainer from './Components/Container';
import ResponsiveDrawer from './Components/ResponsiveSideBar';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <PermanentDrawerLeft/>
      <SimpleContainer/>
    </div>
  );
}

export default App;
