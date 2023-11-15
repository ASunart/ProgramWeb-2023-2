/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useAuth } from "../../auth/hooks/useAuth";

export function PrivateRoute({ children }) {
    const { user } = useAuth()

    if (!user) {
        return <Navigate to="/" />
    }

    return children
}
