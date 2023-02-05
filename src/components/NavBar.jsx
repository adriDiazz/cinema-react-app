import style from './NavBar.module.css';
import Button from './UI/Button';
import InputSearch from './UI/InputSearch';

const NavBar = () => {
	return (
		<nav className={style.nav}>
			<img src='logo.svg' alt='' className={style.logo} />
			<ul className={style.list}>
				<li>Home</li>
				<li>Movies</li>
				<li>Series</li>
			</ul>
			<InputSearch placeholder='Buscar...' />
			<Button>Log in</Button>
		</nav>
	);
};

export default NavBar;
