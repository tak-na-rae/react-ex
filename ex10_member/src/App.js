import './App.css';
import Profile from './components/Profile';

//라우터
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/member1" element={<Profile member="member1"/>}/>
            <Route path="/member2" element={<Profile member="member2"/>}/>
            <Route path="/member3" element={<Profile member="member3"/>}/>
            <Route path="/member4" element={<Profile member="member4"/>}/>
            <Route path="/" element={<Profile member="member1"/>}/> {/* default Route */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
