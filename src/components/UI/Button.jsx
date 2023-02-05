import style from './Button.module.css';

const Button = props => {
	return <button {...props} className={style.btn}></button>;
};

export default Button;
