import { useSelector } from 'react-redux';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import ErrorModal from './components/UI-helpers/ErrorModal';

function App() {
	const isError = useSelector((state) => state.error.isError);

	return (
		<div className='App'>
			{isError && <ErrorModal />}
			<Header></Header>
			<Main></Main>
		</div>
	);
}

export default App;
