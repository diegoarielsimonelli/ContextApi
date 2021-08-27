import React, { useState, createContext } from 'react';

// 1 - CREAR EL CONTEXTO
export const ItemsContext = createContext();

// 2 - CREAR EL COMPONENTE PROVIDER (ItemsProvider)

// STATE que le pasamos al useState
const initialState = [
	{ id: 45454, name: 'Keyboard Dell', price: 20 },
	{ id: 45458, name: 'Mouse Dell', price: 10 },
	{ id: 45459, name: 'Samsung Monitor', price: 300 },
	{ id: 45453, name: 'MacBook Pro', price: 860 },
	{ id: 45457, name: 'Motorola S10', price: 660 },
];

// 5 - PASAR PROPS DENTRO DEL COMPONENTE PROVIDER
export const ItemsProvider = ({ children }) => {
	const [items, setItems] = useState(initialState);

	// 3 - RETORNAMOS NUESTRO CONTEXT CON UN .PROVIDER
	return (
		<ItemsContext.Provider value={[items, setItems]}>
			{/* 4 - PROPS.CHILDREN */}
			{children}
		</ItemsContext.Provider>
	);
};
