import NavElement from './NavElement';

const NAV_ELEMENTS = [
	{ data: 'Calculator', targetRoute: '/calculator', id: 'l1' },
	{ data: 'ToDo', targetRoute: '/todo', id: 'l2' },
	{ data: 'Weather', targetRoute: '/weather', id: 'l3' },
];

const Navigation = (props) => {
	const navElements = NAV_ELEMENTS.map((element) => (
		<NavElement
			key={element.id}
			value={element.data}
			to={element.targetRoute}
		></NavElement>
	));

	return <ul>{navElements}</ul>;
};

export default Navigation;
