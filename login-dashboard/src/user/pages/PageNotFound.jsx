import { Footer } from "../components/Footer"
import { useNavigate } from "react-router-dom"

export function PageNotFound() {
    const navigate = useNavigate()

    return (
        <>
            <section className="flex flex-col items-center gap-9">
                <img src="../src/user/assets/404image.webp" alt="Page not found 404" />
                <p className="text-white font-medium">We recommend you to go back the way you came</p>
                <div>
                    <button onClick={() => navigate(-1)} className="bg-gray-600 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-300 hover:shadow-lg transition-all duration-200">Return</button>
                </div>
            </section>
            <Footer />
        </>
    )
}