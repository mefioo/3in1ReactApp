import Button from './Button';
import classes from './Buttons.module.css';

const Buttons = () => {
	return (
		<div className={classes.buttons}>
			<Button className={''} value={'('}></Button>
			<Button value={')'}></Button>
			<Button value={'.'}></Button>
			<Button className={classes['buttons--red']} value={'←'}></Button>
			<Button className={classes['buttons--red']} value={'C'}></Button>
			<Button value={'7'}></Button>
			<Button value={'8'}></Button>
			<Button value={'9'}></Button>
			<Button className={classes['buttons--orange']} value={'n!'}></Button>
			<Button className={classes['buttons--orange']} value={'^'}></Button>
			<Button value={'4'}></Button>
			<Button value={'5'}></Button>
			<Button value={'6'}></Button>
			<Button className={classes['buttons--orange']} value={'*'}></Button>
			<Button className={classes['buttons--orange']} value={'/'}></Button>
			<Button value={'1'}></Button>
			<Button value={'2'}></Button>
			<Button value={'3'}></Button>
			<Button className={classes['buttons--orange']} value={'+'}></Button>
			<Button className={classes['buttons--orange']} value={'-'}></Button>
			<Button className={classes['buttons__extended--two']} value={'0'}></Button>
			<Button className={classes['buttons--orange'] + ' ' + classes['buttons__extended--three']} value={'='}></Button>
		</div>
	);
};

export default Buttons;
