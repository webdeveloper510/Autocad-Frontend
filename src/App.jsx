import './App.css';
import routes from './routes';
import { redirect, useRoutes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function App() {
const Token = localStorage.getItem('Token');
const location = useLocation()
{Token && location.pathname==="/dashboard" ? <></>: redirect("/")}

  const routing = useRoutes(routes);
  return (
    <>
      <div>
      {routing}
      </div>
    </>
  );
}

export default App;
