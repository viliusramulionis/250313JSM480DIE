export default ({ data }) => {
    // data = {
    //      pavadinimas,
    //      aprasymas
    // }
    return (
        <div className="card p-3 mb-3">
            {/* JSX'e kondicinė logika yra aprašoma naudojant ternary operatorių */}
            {data ? 
                <>
                    <h5>{data.pavadinimas}</h5>
                    <p>{data.aprasymas}</p>
                </>
                :
                <p>Informacijos nėra</p>
            }
        </div>
    );
}