export default ({ klase, tekstas }) => {
    return (
        <button className={'btn btn-' + klase}>{tekstas}</button>
    );
}