import DetailedInfoElement from './DetailedInfoElement';

import classes from './DetailedInfo.module.css';

const DetailedInfo = (props) => {
	const elements = props.elements.map((element, index) => {
		const classname = index % 2 === 0 ? 'item--odd' : 'item--even';
		return (
			<DetailedInfoElement
				key={index}
				className={classname}
				value={element.text}
                icon={element.icon}
			></DetailedInfoElement>
		);
	});
	return <ul className={classes.items}>{elements}</ul>;
};

export default DetailedInfo;
