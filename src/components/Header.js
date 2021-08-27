import React, { useContext } from 'react';
import { ItemsContext } from '../itemsContext';

const Header = () => {
	const [items, setItems] = useContext(ItemsContext);

	const newState = [
		{ id: 45454, name: 'New Keyboard Dell Bluetooth', price: 220 },
		{ id: 45458, name: 'New Mouse Dell Bluetooth', price: 60 },
		{ id: 45458, name: 'Headeset Bluetooth', price: 180 },
	];

	const originalState = [
		{ id: 45454, name: 'Keyboard Dell', price: 20 },
		{ id: 45458, name: 'Mouse Dell', price: 10 },
		{ id: 45459, name: 'Samsung Monitor', price: 300 },
		{ id: 45453, name: 'MacBook Pro', price: 860 },
		{ id: 45457, name: 'Motorola S10', price: 660 },
	];

	return (
		<nav style={styles.header}>
			<p style={styles.text}>Items: {items.length}</p>
			<div>
				<button style={styles.btn} onClick={() => setItems(newState)}>
					Change State
				</button>
				<button style={styles.btn} onClick={() => setItems(originalState)}>
					Change to Original State
				</button>
			</div>
		</nav>
	);
};

const styles = {
	header: {
		backgroundColor: 'black',
		height: '10vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	},
	text: {
		color: 'white',
		fontSize: 18,
	},
	btn: {
		backgroundColor: 'green',
		color: 'white',
		margin: 10,
		fontSize: 15,
	},
};

export default Header;
