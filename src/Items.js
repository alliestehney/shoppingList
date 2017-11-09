import React, { Component } from 'react';

class Items extends Component {

	render() {
		return(
			<div className="Items">
				<button className="DeleteButton" title={"Delete " + this.props.item.name}
					onClick={this.props.onDelete}>
					<i className="fa fa-minus-circle" aria-hidden="true"></i>
				</button>
				<div className="itemName">{this.props.item.name}</div>
				<div className="itemPrice">{"$" + this.props.item.price}</div>
			</div>
		);
	}
}

export default Items;