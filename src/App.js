import './App.css';
import { BrowserRouter, Routes, Route, useRoutes } from 'react-router-dom'
import routesList from './route';


function WrapperRoutes() {
  let element = useRoutes(routesList)
  return element
}
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <WrapperRoutes></WrapperRoutes>
      </BrowserRouter>
    </div>
  );
}

export default App;
