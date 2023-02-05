import SearchIcon from '../Icons/SearchIcon';
import style from './InputSearch.module.css';

const InputSearch = props => {
	return (
		<div className={style.wrapper}>
			<input {...props} type='text' className={style.input} />
			<SearchIcon className={style.icon} />
		</div>
	);
};

export default InputSearch;
