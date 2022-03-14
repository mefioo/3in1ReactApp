import classes from './Display.module.css';
import { useSelector } from 'react-redux';

const Display = () => {
	const calc = useSelector((state) => state.calc.displayText);

	return (
		<div className={classes.display}>
			<p>{calc}</p>
		</div>
	);
};

export default Display;
