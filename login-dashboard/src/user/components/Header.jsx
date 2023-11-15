import { useAuth } from "../../auth/hooks/useAuth"

export function Header() {
    const { logout } = useAuth()
    return (
        <header className="flex justify-between items-center px-14 py-3">
            <img className="w-40" src="./src/user/assets/logo.svg" alt="rick and morty logo" />
            <nav className="flex items-center gap-3">
                <button className="bg-gray-600 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-300 hover:shadow-lg transition-all duration-200"
                    onClick={logout}>Log Out</button>
            </nav>
        </header>
    )
}