import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png';
import '../design/login.css';
import '../assets/boxs.jpeg';

function Register() {
    return(
        <div className='whole'>
            <logo className='lgo'>
                <img src={logo} alt="Logo" height='150' width='150' />
            </logo>
            <div className='content'>
                <div className='form' style={{paddingTop: 100}}>
                    <div className='form-group'>
                        <input type='name' 
                                placeholder='Your Name' 
                                style={{textAlign:'center', 
                                padding: 10, borderRadius: 35, 
                                backgroundColor: 'rgba(255,255,255,0.2)', width: 270}} 
                                onSubmitEditing={() => this.ref.txtPassword.focus()}/>
                    </div>
                    <div className='form-group'>
                        <input type='email' 
                                placeholder='Your Email' 
                                style={{textAlign:'center', 
                                padding: 10, borderRadius: 35, 
                                backgroundColor: 'rgba(255,255,255,0.2)', width: 270}} 
                                onSubmitEditing={() => this.ref.txtPassword.focus()}/>
                    </div>
                    <div className='form-group'>
                        <input type='password' 
                                placeholder='Your Password' 
                                style={{textAlign:'center', 
                                padding: 10, borderRadius: 35, 
                                backgroundColor: 'rgba(255,255,255,0.2)', width: 270}}/>

                        <div>
                            <Button type='button' className='bnt'>
                                <text style={{color: 'black'}}>Register</text>
                            </Button>
                                <text style={{color: 'black', display: 'block', paddingTop: 30, fontFamily: 'Chalkboard SE'}}>Already have an account?</text>
                            <Link to='./login'>
                                <button className='bont' style={{backgroundColor: 'transparent', border: 'none'}}>
                                    <text style={{fontFamily:'Chalkboard SE', color: 'blue'}}>LOG IN</text>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;