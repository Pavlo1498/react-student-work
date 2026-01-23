import './App.css';

import JournalItem from './components/Button/JournalItem/JournalItem.jsx';
import Button from './components/Button/Button.jsx';
import CardButton from './components/CardButton/CardButton.jsx';
import LeftPanel from './layouts/LeftPanel/LeftPanel.jsx';
import JournalList from './components/JournalList/JournalList.jsx';
import Body from './layouts/Body/Body.jsx';
import JournalAddButton from './components/JournalAddButton/JournalAddButton.jsx'
import Header from './components/Header/Header.jsx'
import { useState } from 'react';

function App() {
	const data = [
		{
			title: 'Подготовка к обновлению курсов',
			text: 'Горные походы открывают удивительные природные ландшафты, испытывают туристов физически и морально, дают возможность почувствовать себя первопроходцем.',
			date: new Date()
		},
		{
			title: 'Различают альпинизм и горный туризм.',
			text: 'Если в альпинизме главная цель – покорение вершины, то горный туризм – это длительное путешествие в горах, связанное с прохождением многочисленных препятствий. В нем огромную роль играет физическая подготовка путешественников, их выносливость, способность переносить большие нагрузки и тяжести в условиях высокогорья. Поход по горам – это следование определенному, заранее продуманному, маршруту через ущелья, перевалы, долины, ледники, озера и водопады. У каждого маршрута своя степень сложности, подразумевающая преодоление разнообразных трудностей рельефа. Основная же цель в горном походе – не покорение вершин, а преодоление перевалов.',
			date: new Date()
		}
	];

    const [inputData, setInputData] = useState('');
    const inputChange = (event) => {        
        setInputData(event.target.value)
    }

	return (
		<div className='app-wrapper'> 
			<LeftPanel>
				<Header />
                <JournalAddButton />
				<JournalList>
					<CardButton>
						<JournalItem
							title={data[0].title}
							text={data[0].text}
							date={data[0].date}
						/>
					</CardButton>
					<CardButton>
						<JournalItem
							title={data[1].title}
							text={data[1].text}
							date={data[1].date}
						/>
					</CardButton>
				</JournalList>
			</LeftPanel>
			<Body>
                <input
                    type='text'
                    value={inputData}
                    onChange={inputChange}
                />
			</Body>
		</div>
	);
}

export default App;
