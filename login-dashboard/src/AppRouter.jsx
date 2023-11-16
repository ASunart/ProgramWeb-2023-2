import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./auth/pages/LoginPage";
import { PrivateRoute } from "./user/routers/PrivateRoute";
import { Landing } from "./user/pages/Landing";
import { CharacterDetail } from "./user/pages/CharacterDetail";
import { PageNotFound } from "./user/pages/PageNotFound";

export function AppRouter() {
    return (
        <main>
            <Routes>
                <Route
                    path="/"
                    element={
                        <LoginPage />}
                />
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <Landing />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/character/:id"
                    element={
                        <PrivateRoute>
                            <CharacterDetail />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="*"
                    element={<PageNotFound />}
                />
            </Routes>
        </main>
    )
}