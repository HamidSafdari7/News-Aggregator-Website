import { useAppContext } from '../context/appContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const { user, token } = useAppContext();

    if (!token) {
        return <Navigate to='/register' />;
    }
    return children;
};

export default ProtectedRoute;
