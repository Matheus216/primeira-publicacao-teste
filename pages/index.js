import {useState} from 'react';

const Home = () => {
    return (
        <div> 
            <h2>Home</h2>
            <Contador />
        </div>
    );
}

const Contador = () => {
    const [cont, setCont] = useState(1);

    return (
        <div>
            {cont}
            <button onClick={() => setCont(cont + 1)}>Click me</button>
        </div>
    );
}

export default Home;