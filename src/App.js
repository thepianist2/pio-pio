import logo from './logo.svg';
import React, {useState} from 'react';


import Footer from './Footer/Footer';
import Header from './Header/Header';
import Home from './Home/Home';
import Login from './Login/Login';
import MyProfile from './MyProfile/MyProfile';
import Profile from './Profile/Profile';
import Register from './Register/Register';

import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
    const [drawOpened, setDrawOpened] = useState(false);


  return (
    <div className="App">
      <Router>
        <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          <MenuIcon onClick={()=>setDrawOpened(!drawOpened)} />
        </Toolbar>
        </AppBar>
        <Drawer anchor={'right'} open={drawOpened} onClose={()=>setDrawOpened(!drawOpened)}>{<li>Hola</li>}</Drawer>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/myprofile" element={<MyProfile />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
