import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import AuthContext from '../context/AuthContext';

export default () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(!isLoggedIn)
            return navigate('/');
        
        setIsLoggedIn(false);

        setTimeout(() => {
            navigate('/');
        }, 3000);
    }, []);
    
    return (
        <>
            <h1 className="mb-4">Logout</h1>
            <div className="alert alert-success">
                You are now successfuly logged out
            </div>
        </>
    );
}