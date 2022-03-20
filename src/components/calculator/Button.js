import classes from './Button.module.css';
import { evaluate, format } from 'mathjs';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { calcActions } from '../../store/calc-slice';

const factorial = (num) => {
	if (num <= 1) {
		return 1;
	} else {
		return num * factorial(num - 1);
	}
};

const chechIfValidDot = (calc) => {
	const indexOfLastDot = calc.lastIndexOf('.');
	if (indexOfLastDot === -1) {
		return true;
	} else {
		return calc
			.slice(indexOfLastDot + 1)
			.split('')
			.filter((char) => !Number.isInteger(+char)).length > 0
			? true
			: false;
	}
};

const Button = (props) => {
	let calc = useSelector((state) => state.calc.displayText);
	const isJustCalculated = useSelector(
		(state) => state.calc.isChangeDisplayUsed
	);
	const dispatch = useDispatch();

	const lastDisplayedChar = calc.slice(-1);
	const isLastCharNumber = Number.isInteger(+lastDisplayedChar);

	const addMissingClosingBrackets = () => {
		const missingBrackets =
			(calc.match(/\(/g) || []).length - (calc.match(/\)/g) || []).length;
		calc = calc + ')'.repeat(missingBrackets);
	};

	const calculate = () => {
		let result;
		addMissingClosingBrackets();
		if (
			!isLastCharNumber &&
			lastDisplayedChar !== ',' &&
			lastDisplayedChar !== ')'
		) {
			try {
				result = `${format(evaluate(calc.slice(0, -1)), { precision: 14 })}`;
				const expression = `${result}${lastDisplayedChar}${result}`;
				result = `${format(evaluate(expression), { precision: 14 })}`;
			} catch (error) {
				result = 0;
				console.log('ERROR');
			}
		} else {
			try {
				result = `${format(evaluate(calc), { precision: 14 })}`;
			} catch (error) {
				result = 0;
				console.log('ERROR');
			}
		}
		return result;
	};

	const buttonClickHandler = () => {
		let result;
		if (
			isJustCalculated &&
			(Number.isInteger(+props.value) || props.value === '←')
		) {
			dispatch(calcActions.clearDisplay());
			calc = '0';
		}

		if (calc === 'infinity') {
			dispatch(calcActions.clearDisplay());
			calc = '0';
		}

		switch (props.value) {
			case 'C':
				dispatch(calcActions.clearDisplay());
				break;
			case '←':
				if (calc.length === 1) {
					dispatch(calcActions.clearDisplay());
				} else {
					dispatch(calcActions.changeLastChar(''));
				}
				break;
			case '.':
				if (!chechIfValidDot(calc)) {
					break;
				}

				Number.isInteger(+lastDisplayedChar)
					? dispatch(calcActions.addChar(props.value))
					: dispatch(calcActions.addChar('0' + props.value));

				break;
			case '=':
				result = calculate();
				result = result.length >= 12 ? result.slice(0, 12) : result;
				dispatch(calcActions.changeDisplay(result));
				break;
			case '(':
				if (lastDisplayedChar === '0') {
					dispatch(calcActions.replaceZero(props.value));
				}
				if (
					isLastCharNumber ||
					lastDisplayedChar === ')' ||
					lastDisplayedChar === '.'
				) {
					break;
				}
				dispatch(calcActions.addChar(props.value));
				break;
			case ')':
				if (
					calc.includes('(') &&
					(calc.match(/\(/g) || []).length - (calc.match(/\)/g) || []).length
				) {
					dispatch(calcActions.addChar(props.value));
				}
				break;
			case 'n!':
				result = factorial(calculate()).toString();
				result = result.length >= 12 ? result.slice(0, 12) : result;
				dispatch(calcActions.changeDisplay(`${result}`));
				break;
			default:
				if (lastDisplayedChar === ')' && Number.isInteger(+props.value)) {
					break;
				}
				if (
					lastDisplayedChar &&
					!isLastCharNumber &&
					!Number.isInteger(+props.value) &&
					lastDisplayedChar !== ')'
				) {
					dispatch(calcActions.changeLastChar(props.value));
					break;
				}
				if (calc === '0' && Number.isInteger(+props.value)) {
					dispatch(calcActions.replaceZero(props.value));
				} else {
					dispatch(calcActions.addChar(props.value));
				}
				break;
		}
	};

	return (
		<button
			onClick={buttonClickHandler}
			className={classes.button + ' ' + props.className}
		>
			{props.value}
		</button>
	);
};

export default Button;
