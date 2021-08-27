import './App.css';

import Header from './components/Header';
import ItemsList from './components/ItemsList';

// HOC - HIGH ORDER COMPONENT
// 6 - IMPORTAR NUESTRO PROVIDER Y ENVOLVER NUESTRA APP
import { ItemsProvider } from './itemsContext';

export const App = () => {
	return (
		<ItemsProvider>
			<div className='App'>
				<Header />
				<h1>Context Api</h1>
				<ItemsList />
			</div>
		</ItemsProvider>
	);
};
