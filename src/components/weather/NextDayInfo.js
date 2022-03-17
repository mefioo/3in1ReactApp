

const NextDayInfo = (props) => {
	return (
		<div>
			<p>{props.day}</p>
			<p>{props.date}</p>
			<p>{props.temp}</p>
			<p>{props.rain}</p>
		</div>
	);
};

export default NextDayInfo;
