import Navigation from './Navigation';
import classes from './Header.module.css';

const Header = (props) => {
	return (
		<div className={classes.header}>
			<Navigation></Navigation>
		</div>
	);
};

export default Header;
