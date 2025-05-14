export default ({ text, setText }) => {
    const handleClick = () => {
        setText('Viso Pasauli');
    }

    return (
        <button onClick={handleClick}>{text}</button>
    );
}