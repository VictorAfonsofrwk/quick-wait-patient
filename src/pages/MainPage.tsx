import NavBar from '../components/navbar';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/home';



export default function MainPage() {
  return (
    <>
      <NavBar />
      <div>
        <Routes>
          <Route path='/patient' element = {<Home/>}/>
          <Route path='hospitais' element = {<Home/>}/>
        </Routes>
      </div>
    </>
  );
}
