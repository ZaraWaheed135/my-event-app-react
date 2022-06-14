import '../App.css';
import PrimarySearchAppBar from './NavBar';
import PermanentDrawerLeft from './SideBar';
import SimpleContainer from './Container';

function Event() {
    return (
      <div className="Event">
        <PrimarySearchAppBar/>
        <PermanentDrawerLeft/>
        <SimpleContainer/>
      </div>
    );
  }
  
  export default Event;