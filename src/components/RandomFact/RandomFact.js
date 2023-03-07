import {useEffect, useState} from "react";


function RandomFact() {
    const [fact, setFact] = useState('');

    useEffect(() => {
        fetch('https://uselessfacts.jsph.pl/random.json?language=en')
            .then(response => response.json())
            .then(data => {
                setFact(data.text);
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