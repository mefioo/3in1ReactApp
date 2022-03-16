import { Navigate, Route, Routes } from 'react-router-dom';
import Calculator from '../../pages/Calculator';
import Weather from '../../pages/Weather';
import classes from './Main.module.css';

const Main = () => {
	return (
		<main className={classes.main}>
			<Routes>
				<Route
					path='/'
					element={<Navigate replace to='/calculator'></Navigate>}
				></Route>
				<Route path='/calculator' element={<Calculator></Calculator>}></Route>
				<Route path='/todo' element={<p>Page under construction</p>}></Route>
				<Route path='/weather' element={<Weather></Weather>}></Route>
			</Routes>
		</main>
	);
};

export default Main;
