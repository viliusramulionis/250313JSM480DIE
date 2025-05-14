import { useState } from 'react';

export default ({ text }) => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>{text} buvo paspaustas {count} kartų</button>
    );
}