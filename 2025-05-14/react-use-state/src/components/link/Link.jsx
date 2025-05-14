export default ({ text }) => {
    const handleClick = (e) => {
        e.preventDefault();
        
        console.log('Veikia');
    }

    return (
        // <a href="https://google.com" onClick={handleClick}>{text}</a>

        // Prie įvykio galime iš karto aprašinėti funkciją:
        <a href="https://google.com" onClick={(e) => e.preventDefault()}>{text}</a>
    );
}