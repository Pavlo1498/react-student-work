import './JournalAddButton.css';

import CardButton from '../CardButton/CardButton';

function JournalAddButton() {
	return (
		<CardButton className="journal-add-button">
            <img
                src='/add.svg'
                alt='Логотип'
            />
            Новое воспоминание
        </CardButton>
	);
}

export default JournalAddButton;