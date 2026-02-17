import './App.css';

import JournalAddButton from './components/JournalAddButton/JournalAddButton.jsx'
import JournalList from './components/JournalList/JournalList.jsx';
import JournalForm from './components/JournalForm/JournalForm.jsx';
import LeftPanel from './layouts/LeftPanel/LeftPanel.jsx';
import Header from './components/Header/Header.jsx'
import Body from './layouts/Body/Body.jsx';
import { useState } from 'react';

const INITIAL_DATA = [
    // {
    //     id: 1,
    //     title: 'Подготовка к обновлению курсов',
    //     text: 'Горные походы открывают удивительные природные ландшафты, испытывают туристов физически и морально, дают возможность почувствовать себя первопроходцем.',
    //     date: new Date()
    // },
    // {
    //     id: 2,
    //     title: 'Различают альпинизм и горный туризм.',
    //     text: 'Если в альпинизме главная цель – покорение вершины, то горный туризм – это длительное путешествие в горах, связанное с прохождением многочисленных препятствий. В нем огромную роль играет физическая подготовка путешественников, их выносливость, способность переносить большие нагрузки и тяжести в условиях высокогорья. Поход по горам – это следование определенному, заранее продуманному, маршруту через ущелья, перевалы, долины, ледники, озера и водопады. У каждого маршрута своя степень сложности, подразумевающая преодоление разнообразных трудностей рельефа. Основная же цель в горном походе – не покорение вершин, а преодоление перевалов.',
    //     date: new Date()
    // }
]
function App() {
    const [items, setItems] = useState(INITIAL_DATA);

    const addItem = (item) => {
        setItems(oldItems => [...oldItems, {
            title: item.title,
            text: item.text,
            date: new Date(item.date),
            id: crypto.randomUUID()
        }])
    }
	return (
		<div className='app-wrapper'> 
			<LeftPanel>
				<Header />
                <JournalAddButton />
				<JournalList items={items}>
				</JournalList>
			</LeftPanel>
			<Body>
                <JournalForm onSubmit={addItem}/>
			</Body>
		</div>
	);
}

export default App;
