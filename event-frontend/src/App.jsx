import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import Auth from './components/Auth';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <Router>
      <Routes>
       <Route exact path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
       <Route exact path="/auth" element={<Auth/>}/> 
      </Routes>
    </Router>
  );
};

export default App;
