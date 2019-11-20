import React, {Component} from 'react';
import Title from './Title';
import { ProductConsumer } from '../context';
import LogIn from './LogIn';


export default class Register extends Component{
	render(){
		return(
			<section>
			
				<ProductConsumer>


					{value => (


						/*use React.Fragment since we can only return one thing*/
						<React.Fragment>
							<Title name="Register" title="Now" />

							<div className="container py-3 mb-5">
					            <div className="row justify-content-center ml-5 my-3">
					                <div className="col-md-8 col-md-offset-2">

					                    <form method="post" className="cmxform" action="" id="signUpForm">

					                        <div className="form-group row">
					                            <label for="firstname" className="col-sm-2 form-control-label">First Name:</label>
					                            <div className="col-sm-8">
					                                <input type="text" name="firstname" className="form-control" id="firstname" placeholder="First Name" name="name" minlength="2" required />
					                            </div>
					                        </div>

					                        <div className="form-group row">
					                            <label for="lastname" className="col-sm-2 form-control-label">Last Name:</label>
					                            <div className="col-sm-8">
					                                <input type="text" name="lastname" className="form-control" id="lastname" placeholder="Last Name" />
					                            </div>
					                        </div>

					                        <div className="form-group row">
					                            <label for="email" className="col-sm-2 form-control-label">Email:</label>
					                            <div className="col-sm-8">
					                                <input type="email" name="email" className="form-control email" id="email" placeholder="Email Address" />
					                            </div>
					                        </div>

					                        <div className="form-group row">
					                            <label for="username" className="col-sm-2 form-control-label">Username:</label>
					                            <div className="col-sm-8">
					                                <input type="text" name="username" className="form-control" id="username" placeholder="Username" />
					                            </div>
					                        </div>

					                        <div className="form-group row">
					                            <label for="password" className="col-sm-2 form-control-label">Password:</label>
					                            <div className="col-sm-8">
					                                <input type="password" name="password" className="form-control" id="password" placeholder="Enter password" />
					                            </div>
					                        </div>

					                        <div className="form-group row">
					                            <label for="confirm_password" className="col-sm-2 form-control-label">Confirm Password:</label>
					                            <div className="col-sm-8">
					                                <input type="password" className="form-control" name="confirm_password" id="confirm_password" placeholder="Confirm password" />
					                            </div>
					                        </div>

					                        <div className="form-group row">
					                            <label for="birthdate" className="col-sm-2 form-control-label">BirthDate:</label>
					                            <div className="col-sm-8">
					                                <input type="date" className="form-control" name="birthdate" id="birthdate" placeholder="Enter Birthdate" required />
					                            </div>
					                        </div>
					                        <br />
					                        <div className="form-group row justify-content-center pr-3 mr-5">
					                            <div className="col-sm-offset-2 col-sm-8 col-lg-6">
					                                <input type="submit" className="btn btn-success btn-lg btn-block" id="submitForm" value="Sign Up Now!" />
					                            </div>
					                        </div>
					                    </form>
					                </div>
					            </div>
					        </div>



						</React.Fragment>
						
					)}
				</ProductConsumer>
			</section>

		)
	}
}