import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png';
import '../design/login.css';
import '../assets/boxs.jpeg';

function Login() {
    return(
        <div className='wholes'>
            <logo className='lgo'>
                <img src={logo} alt="Logo" height='150' width='150' />
                <text className='minititle' style={{fontSize: 22, fontWeight: 'bold'}}>Account Information</text>
            </logo>
            <div className='content'>
                <div className='form' style={{paddingTop: 100}}>
                    <div className='form-group'>
                        <input type='email' 
                                placeholder='Email' 
                                style={{textAlign:'center', 
                                padding: 10, borderRadius: 35, 
                                backgroundColor: 'rgba(255,255,255,0.2)', width: 270}} 
                                onSubmitEditing={() => this.ref.txtPassword.focus()}/>
                    </div>
                    <div className='form-group'>
                        <input type='password' 
                                placeholder='Password' 
                                style={{textAlign:'center', 
                                padding: 10, borderRadius: 35, 
                                backgroundColor: 'rgba(255,255,255,0.2)', width: 270}}/>

                        <div>
                            <Button type='button' className='bnt'>
                                <text style={{color: 'black'}}>LOG IN</text>
                            </Button>
                                <text style={{color: 'black', display: 'block', paddingTop: 30, fontFamily: 'Chalkboard SE'}}>New to Rental Shifters?</text>
                            <Link to='./Register'>
                                <button className='bont' style={{backgroundColor: 'transparent', border: 'none'}}>
                                    <text style={{fontFamily:'Chalkboard SE', color: 'blue'}}>Register</text>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;