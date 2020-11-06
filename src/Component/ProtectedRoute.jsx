import React from 'react';
import{Route,Redirect} from "react-router-dom";

const ProtectedRoute = ({children, ...rest}) => {
    const [auth, setAuth] = React.useState(false);
    
    return (
        <div>
            <Route {...rest}>{auth ?children : <Redirect to="/login"/>}</Route>
        </div>
    )
};

export default ProtectedRoute;
