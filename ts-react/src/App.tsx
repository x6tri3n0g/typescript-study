import Greetings from './Greetings';
import React from 'react';

function App() {
    const onClick = (name: string) => {
        console.log(`${name} says hello`);
    };

    return <Greetings name="Hyun" onClick={onClick} />;
}

export default App;
