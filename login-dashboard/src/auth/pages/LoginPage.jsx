import { Navigate } from "react-router-dom";
import { Form } from "../components/Form";
import { useAuth } from "../hooks/useAuth";
/* eslint-disable react/prop-types */
export function LoginPage() {
    const { user } = useAuth()
    if (user) {
        return <Navigate to='/dashboard' />
    }
    return (
        <main className="grid place-items-center h-screen">
            <Form />
        </main>
    )

}