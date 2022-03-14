import Buttons from '../components/calculator/Buttons';
import classes from './Calculator.module.css';

import Display from '../components/calculator/Display';

const Calculator = () => {
	return (
		<div className={classes.calculator}>
			<Display></Display>
			<Buttons></Buttons>
		</div>
	);
};

export default Calculator;
