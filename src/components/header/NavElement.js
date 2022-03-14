import { NavLink } from 'react-router-dom';

const NavElement = (props) => {
	return (
		<li>
			<NavLink to={props.to}>{props.value}</NavLink>
		</li>
	);
};

export default NavElement;
