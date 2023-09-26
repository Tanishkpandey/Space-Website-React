import './App.css';
import Navbar from './MyComponents/Navbar';
import Herosection from './MyComponents/Herosection';
import Features from './MyComponents/Features';
import Designconcept from './MyComponents/Designconcept';
import Serviceards from './MyComponents/Serviceards';
import Teams from './MyComponents/Teams';
import Calltoaction from './MyComponents/Calltoaction';
import Footer from './MyComponents/Footer';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Herosection></Herosection>
      <Features></Features>
      <Designconcept></Designconcept>
      <Serviceards></Serviceards>
      <Teams></Teams>
      <Calltoaction></Calltoaction>
      <Footer></Footer>
      <h5 className='credits'>Made by Tanishk, bade ❤ se banai hain</h5>
    </div>
  );
}

export default App;
