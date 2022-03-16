import classes from './Flexbox.module.css'

const Flexbox = (props) => {
	return <div className={classes[props.className]}>{props.children}</div>;
};

export default Flexbox;
