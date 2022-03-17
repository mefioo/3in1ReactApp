import classes from './WeatherInfoCard.module.css';

const WeatherInfoCard = (props) => {
	const infoClassNames = props.className
		.split(' ')
		.map((className) => classes[className])
		.join(' ');
	return <div className={infoClassNames}>{props.children}</div>;
};

export default WeatherInfoCard;
