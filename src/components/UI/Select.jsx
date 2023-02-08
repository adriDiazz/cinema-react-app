import style from './Select.module.css';

const Select = props => {
	return <select {...props} className={style.select}></select>;
};

export default Select;
