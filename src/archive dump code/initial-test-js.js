import React from 'react';
import ReactDOM from 'react-dom';

const outsideParagraph = 'this came from outside'
const printLocation = () => {
    return 'fucntion call print';
}

let mark = 5;
const conditional = (num) => {
    if (num === 10) {
        return <p>conditional rendering for true</p>
    } else {
        return <p>conditional rendering for false </p>
    }
}

let counter = 0;

const change = () => {
    counter += 1;
    renderApp();
}

let options = ['test option 1', 'test option 2'];

const onTestFormSubmit = (e) => {
    e.preventDefault();

    const testOption = e.target.elements.option.value;

    if (testOption) {
        options.push(testOption);
        e.target.elements.option.value = '';
        renderApp();
    }
    
}


const renderApp = () => {
    const template = (
        <div>
            <h1>testing react</h1>
            <p>{outsideParagraph}</p>
            <p>{printLocation()}</p>
            <h2>This {counter} will change whenever function change is called</h2>
            <button disabled={counter > 100} onClick={change}>Add 1</button>
            {conditional(mark)}
            <form onSubmit={onTestFormSubmit}>
                <input type="text" name="option" />
                <button>Add test form option</button>
            </form>
            {options.map((option) => {
                return <p key={options.indexOf(option)}>{option}</p>
            })}
            
        </div>
    );
    ReactDOM.render(template, appRoot);
    
};

let appRoot = document.getElementById('app');
renderApp();