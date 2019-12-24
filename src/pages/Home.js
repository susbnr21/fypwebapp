import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png';
import '../design/home.css';
import '../assets/boxs.jpeg'

function Home() {
    return(
        <div className='whole'>
                <h1 className='title'>WELCOME TO
                    <logo className='logo'>
                        <img src={logo} alt="Logo" height='250' width='250'/>
                    </logo>
                </h1>
                <text className='txt'>Nepal's First Online Platform for Shifting Your Stay</text>
                <Link to='/login'>
                    <Button className='btn'>
                        <text className='strt'>Get Started</text>
                    </Button>
                </Link>
        </div>
    );
}

export default Home;