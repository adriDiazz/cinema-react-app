import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import style from './NavBar.module.css';
import Button from './UI/Button';
import InputSearch from './UI/InputSearch';

const NavBar = () => {
	const [selected, setSelected] = useState({});

	return (
		<nav className={style.nav}>
			<img src='logo.svg' alt='' className={style.logo} />
			<ul className={style.list}>
				<NavLink
					to='/'
					onClick={() => {
						setSelected({ home: true, movies: false, series: false });
					}}
					className={({ isActive }) => (isActive ? style.selected : style.link)}
				>
					Home
				</NavLink>
				<NavLink
					to='/movies'
					onClick={() => {
						setSelected({ home: false, movies: true, series: false });
					}}
					className={({ isActive }) => (isActive ? style.selected : style.link)}
				>
					Movies
				</NavLink>
				<NavLink
					to='/series'
					onClick={() => {
						setSelected({ home: false, movies: false, series: true });
					}}
					className={({ isActive }) => (isActive ? style.selected : style.link)}
				>
					Series
				</NavLink>
			</ul>
			<InputSearch placeholder='Buscar...' />
			<Button>Log in</Button>
		</nav>
	);
};

export default NavBar;
