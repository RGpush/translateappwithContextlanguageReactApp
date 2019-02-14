import React from 'react';
import UserCreate from "./UserCreate";
import {LanguageStore} from '../contexts/LanguageContext';
import ColorContext from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

class App extends React.Component{

    onLanguageChange = (language) => {
        this.setState({language});
    }

    render() {
        return (
            <div className='ui container'>
                <LanguageStore>
                <LanguageSelector onLanguageChange={this.onLanguageChange}/>
                <ColorContext.Provider value='red'>
                <UserCreate/>
                </ColorContext.Provider>
                </LanguageStore>
            </div>
        );
    }
}

export default App;