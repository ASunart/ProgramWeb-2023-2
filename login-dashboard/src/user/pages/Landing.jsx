import { useCharacter } from "../hooks/useCharacter"
import { Characters } from "../components/Characters"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

export function Landing() {
    const { filteredResults, filtrado, handleFilterChange } = useCharacter()
    return (
        <div>
            <Header />
            <section className="mt-6">
                <h1 className="font-bold text-center bg-clip-text text-transparent text-4xl bg-gradient-to-r from-cyan-500 to-yellow-400">Welcome to the Rick And Morty Dashboard</h1>
            </section>

            <section className="py-6 px-16 mt-20">
                <label className="text-white" htmlFor="filtro">Filter by:</label>
                <select id="filtro" value={filtrado} onChange={handleFilterChange}
                >
                    <option value="All">All</option>
                    <option value="Alive">Alive</option>
                    <option value="Dead">Dead</option>
                    <option value="unknown">Unknown</option>
                </select>

                <div className="mt-5">
                    <Characters characters={filteredResults} />
                </div>
            </section>

            <Footer />
        </div>
    )
}