import React, { Component } from 'react'
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';

export default class LogIn extends Component {
  render() {
    return (
        <ProductConsumer>
            {(value) => {
                const { openLogIn, logInOpen, closeLogIn } = value;

                if (!logInOpen) {
                    return null;
                } else {
                    return <ModalContainer>
                        <div className="container">
                            <div className="row">
                                <div id="modal" 
                                    className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                    <h4 className="mt-3">Please log in</h4>
                                    <br />

                                    {/*log in form*/}
                                    <form>
                                        <div>
                                            <label for="username">Username: &nbsp;&nbsp;</label>
                                            <input
                                              type="text" id="username" required
                                            />
                                        </div>
                                        <br />
                                        <div>
                                            <label for="password">Password: &nbsp;&nbsp;</label>
                                            <input
                                              type="password" id="password" required
                                            />
                                        </div>
                                        <br />
                                        <button class="btn btn-primary" type="submit">Log In</button>
                                    </form>

                                    {/*redirect to Register*/}
                                    <Link 
                                        to="/Register"
                                        onClick={() => {closeLogIn();}}
                                    >
                                        <h6 className="mt-3">
                                            Register Now
                                        </h6>
                                    </Link>

                                </div>
                            </div>
                        </div>        
                    </ModalContainer>
                }
            }}
        </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    #modal {
        background: var(--mainWhite);
    }
`;