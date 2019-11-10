import React, {Component} from 'react'

export default class Default extends Component{
	render() {

		return(
			<div className="height-full text-capitalize ml-5 mt-5">
				<h3> page not found </h3>
				<h3> The requested URL&nbsp;
					<span className="text-danger">{this.props.location.pathname}</span>
					 &nbsp;was not found.
				</h3>
			</div>

			)
	}
}