import {useState} from 'react';

const Home = () => {
    return (
        <div> 
            
            <Contador />
        </div>
    );
}

const Contador = () => {
    const [cont, setCont] = useState(1);

    return (
        <div>
            <h2>Tarsis é gay {cont} vezes </h2>
            
            <button onClick={() => setCont(cont + 1)}>Clica para adicionar mais vezes</button>
        </div>
    );
}

export default Home;