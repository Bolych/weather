import {useEffect, useState} from "react";
import axios from "axios";
import s from './RandomFact.module.css'

function RandomFact() {
    const [fact, setFact] = useState('');

    useEffect(() => {
        axios.get('https://uselessfacts.jsph.pl/random.json?language=en')
            .then(response => {
                setFact(response.data.text);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);



    return (
        <div className={s.content}>
            <h3>Random fact:</h3>
            <p>{fact}</p>
        </div>
    );
}

export default RandomFact;