import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { extractFormData } from "../utils/common";
import AuthContext from "../context/AuthContext";

export default () => {
    const [alert, setAlert] = useState({});
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

    // Peradresavimo funkcijos sukurimas
    const navigate = useNavigate();

    useEffect(() => {
        // Peradresavimo iniciavimas
        if(isLoggedIn)
            navigate('/admin');
    }, []);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const data = extractFormData(e.target);

        if (
            data.username !== 'administratorius' && 
            data.password !== 'vilniuscoding'
        ) {
            return setAlert({
                message: 'You have entered wrong credentials.',
                status: 'danger'
            });
        }

        // Atvaizduojama sėkmingo prisijungimo žinutė
        setAlert({
            message: 'Congratulations! You have successfuly logged in.',
            status: 'success'
        });

        // Vartotojo statuso pakeitimas
        setIsLoggedIn(true);

        // Po sėkmingo prisijungimo inicijuojamas peradresavimas
        setTimeout(() => {
            navigate('/admin');
        }, 3000);
        
    }

    return (
        <>
            <div className="m-auto" style={{ maxWidth: 420 }}>
                <h1 className="mb-4">Login</h1>

                <div className={'alert alert-' + alert.status}>
                    {alert.message}
                </div>
                
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="mb-2">Please enter your username:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="username"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="mb-2">Please enter your password:</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            name="password"
                        />
                    </div>
                    <button className="btn btn-dark">Login</button>
                </form>
            </div>
        </>
    );
}