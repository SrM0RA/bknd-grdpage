import { Navigate, Outlet } from 'react-router-dom';

export function ProtectedRoute({session, Session}) {
    if(!session || !Session){
        return <Navigate to="/"/>;
    }
    return(
        <>
        <Outlet/>
        </>
    );
}