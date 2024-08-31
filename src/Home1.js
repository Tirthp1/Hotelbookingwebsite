import logo from './logo.svg';
import './App.css';
import N2 from './NAVBAR2';
import HA from './HEADERA';
import H2A from './HEADER2A';
import C1 from './CARD1';
import C2 from './CARD2';
import F from './FOOTER';
import { useLocation } from 'react-router-dom';

function Home1() {
  const location=useLocation();
  const p1={
    name:location.state.n,
    email:location.state.id,
    }
  return (
    <>
    <N2 info={p1}></N2>
    <H2A></H2A>
    <HA></HA>
    <C1></C1>
    <C2></C2>
    <F></F>
    </>
  );
}

export default Home1;
