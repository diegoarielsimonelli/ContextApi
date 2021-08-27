import React from 'react';

const Items = ({ itemData }) => {
	return (
		<div style={{ backgroundColor: 'yellow', width: 400, margin: 10 }}>
			<p>
				Name: {itemData.name} - $ {itemData.price}
			</p>
		</div>
	);
};

export default Items;
