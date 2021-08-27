import React, { useContext } from 'react';
import Items from './Items';

// Context
import { ItemsContext } from '../itemsContext';

const styles = {
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
	},
};

const ItemsList = () => {
	const [items, setItems] = useContext(ItemsContext);
	return (
		<div style={styles.container}>
			{items.map((item) => {
				return <Items itemData={item} />;
			})}
		</div>
	);
};

export default ItemsList;
