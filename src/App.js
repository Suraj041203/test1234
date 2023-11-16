import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route,Link,NavLink } from 'react-router-dom';
import Main from './Main';
import Admin from './Admin';
import Vote from './Vote';
import Thanks from './Thanks';
import Head from './Header';

function App() {
  return (
    
    <BrowserRouter>
    <Head></Head>
      <Routes>
      <Route path="/main" element={<Main />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/vote" element={<Vote />} />
      <Route path="/thanks" element={<Thanks />} />
      </Routes>
      </BrowserRouter>    
  );
}

export default App;
