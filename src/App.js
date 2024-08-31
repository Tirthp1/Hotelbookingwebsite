import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Home";
// import Hotel from "./H";
import List from "./List";
import Signup from "./Register";
import Login from "./Login";
import Home1 from "./Home1";
import Account from "./Account";
import Mumbai from "./Mumbai";
import Delhi from "./Delhi";
import Ahmedabad from "./Ahmedabad";
import Kolkata from "./Kolkata";
import Banglore from "./Banglore";
import Hyderabad from "./Hyderabad";
import List1 from "./List1";
import P from './POST';
import P1 from './POST2';

function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels1" element={<List1/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home1" element={<Home1/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/mumbai" element={<Mumbai/>}/>
        <Route path="/delhi" element={<Delhi/>}/>
        <Route path="/ahmedabad" element={<Ahmedabad/>}/>
        <Route path="/kolkata" element={<Kolkata/>}/>
        <Route path="/banglore" element={<Banglore/>}/>
        <Route path="/hyderabad" element={<Hyderabad/>}/> 
        <Route path="/post" element={<P/>}/> 
        <Route path="/post1" element={<P1/>}/> 
        {/* <Route path="/" element={<Home1/>}/> */}
        {/* /* <Route path="/hotels/:id" element={<Hotel/>}/> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;