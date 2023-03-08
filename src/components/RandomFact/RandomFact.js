import {useEffect, useState} from "react";
import axios from "axios";


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
        <div>
            <h1>Random Useless Fact</h1>
            <p>{fact}</p>
        </div>
    );
}

export default RandomFact;