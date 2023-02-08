import Button from './UI/Button';
import style from './NextPage.module.css';

const NextPage = ({ setPage }) => {
	return (
		<div className={style.wraper}>
			<Button onClick={() => setPage(prev => prev + 1)}>Load More</Button>
		</div>
	);
};

export default NextPage;
