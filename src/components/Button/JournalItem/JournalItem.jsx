import './JournalItem.css';
import { formatDate } from '../../../utils/dateFormat';

function JournalItem({title, text, date}) {
	return (
		<>
			<h2 className="journal-item__header">{title}</h2>
			<h2 className="journal-item__body">
				<div className="journal-item__date">{formatDate(date)}</div>
				<div className="journal-item__text">{text}</div>
			</h2>
		</>
	);
}

export default JournalItem;
