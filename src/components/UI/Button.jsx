import style from './Button.module.css';

const Button = ({ loading, ...props }) => {
	return (
		<button
			{...props}
			className={`${style.btn} ${loading && style.loading}`}
		></button>
	);
};

export default Button;
