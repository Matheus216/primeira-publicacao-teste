import {useState} from 'react';

import Nav from './Components/Navbar/Navbar';

const Home = () => {
    return (
        <div>  
            <style jsx global>{ `
                body {
                    margin: 0;
                    padding: 0;
            `}
            </style>
            <Nav />
            <Contador />
        </div>
    );
}

const Contador = () => {
    const [cont, setCont] = useState(1);

    return (
        <div>
            <h2>Tarsis é gay {cont} vezes </h2>
            
            <button onClick={() => setCont(cont + 1)}>Clica para adicionar mais vezes Test</button>
        </div>
    );
}

export default Home;