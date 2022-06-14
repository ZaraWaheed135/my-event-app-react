import '../App.css';
import PrimarySearchAppBar from './NavBar';
import PermanentDrawerLeft from './SideBar';
import SimpleContainer from './Container';
import AddEventContainer from './AddEventContainer';

function AddNewEvent() {
    return (
      <div className="App">
        <PrimarySearchAppBar/>
        <PermanentDrawerLeft/>
        <AddEventContainer/>
      </div>
    );
  }
  
  export default AddNewEvent;