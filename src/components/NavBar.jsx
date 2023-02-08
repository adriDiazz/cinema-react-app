import { useNavigate } from 'react-router-dom';
import style from './NavBar.module.css';
import Button from './UI/Button';
import InputSearch from './UI/InputSearch';

const NavBar = () => {
	const navigate = useNavigate();

	return (
		<nav className={style.nav}>
			<img src='logo.svg' alt='' className={style.logo} />
			<ul className={style.list}>
				<li onClick={() => navigate('/')}>Home</li>
				<li onClick={() => navigate('/movies')}>Movies</li>
				<li onClick={() => navigate('/series')}>Series</li>
			</ul>
			<InputSearch placeholder='Buscar...' />
			<Button>Log in</Button>
		</nav>
	);
};

export default NavBar;
