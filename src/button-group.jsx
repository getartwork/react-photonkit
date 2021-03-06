import React from 'react';

export default class ButtonGroup extends React.Component {
	render() {
		return (
			<div className="btn-group">
				{this.props.children}
			</div>
		);
	}
}

ButtonGroup.propTypes = {
	children: React.PropTypes.node
};
