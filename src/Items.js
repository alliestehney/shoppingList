import React, { Component } from 'react';

class Items extends Component {

	render() {
		return(
			<div className="Items">
				<div className="itemName">{this.props.item.name}</div>
				<div className="itemPrice">{this.props.item.price}</div>
			</div>
		);
	}
}

export default Items;