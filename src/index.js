import React        from 'react';
import ReactDOM     from 'react-dom';

// Constants
const GREETING = 'Hola';


const user = {
    firstName: 'Lautaro',
    lastName: 'Cepeda'
};


function formatName(user) {
    return `${user.firstName} ${user.lastName}`;
}

function getGreeting(user) {
    if ( user ) {
        return `${ GREETING }, ${ formatName(user) }!`;
    }

    return `${ GREETING }, Unknown!`;
}


const element = (
    <div>
        <h1 style={{ color: 'grey' }}> { getGreeting(user) } </h1>
    </div>
);

const container = document.getElementById('root');





ReactDOM.render(element, container);