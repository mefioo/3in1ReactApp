import { NavLink } from 'react-router-dom';
import classes from './NavElement.module.css'

const NavElement = (props) => {
	return (
		<li className={classes.item}>
			<NavLink to={props.to}>{props.value}</NavLink>
		</li>
	);
};

export default NavElement;
