import React, {FC} from 'react';
import './App.css';
import NotesContainer from "./components/NotesContainer";

const App: FC = () => {
    return (
        <div className='App'>
            <NotesContainer/>
        </div>
    );
};

export default App;
