import classes from './DetailedInfoElement.module.css';

const DetailedInfoElement = (props) => {
	return (
		<li className={`${classes.item} ${classes[props.className]}`}>{props.icon} {props.value}</li>
	);
};

export default DetailedInfoElement;
