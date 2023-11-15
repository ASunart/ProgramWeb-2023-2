/* eslint-disable react-hooks/exhaustive-deps */
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import { Footer } from "../components/Footer"

export function CharacterDetail () {
    const {state} = useLocation()
    const {name, image, status, location, origin, species} = state

    let colorStatus

    switch (status) {
        case 'Alive':
            colorStatus = 'bg-lime-500'
        break

        case 'Dead': 
            colorStatus = 'bg-red-500'
        break

        case 'unknown':
            colorStatus = 'bg-slate-400'
        break
    }

    return (
        <>
            <div className="px-14 py-14">
                <Link to="/dashboard">
                    <button className="px-4 py-2 font-medium bg-slate-400 rounded-xl hover:bg-red-300 transition-all duration-200">Regresar</button>
                </Link>
            </div>

            <section className="grid place-content-center text-white">
                <div className="md:flex sm:flex items-center bg-slate-700 gap-10 justify-center shadow-lg rounded-xl p-10 border border-solid border-slate-700">
                    <img className="rounded-xl" src={image} alt="" />
                    <div className="flex flex-col gap-9">
                        <div>
                            <h1 className="font-bold text-5xl mb-3">{name}</h1>
                            <div className="flex gap-3 items-center">
                                <div className={`w-3 h-3 rounded-full ${colorStatus}`}></div>
                                <h2 className="font-medium">{status}</h2>
                            </div>
                        </div>
                        <h3>Species: {species}</h3>
                        <h4>Origin: {origin}</h4>
                        <h5>Location: {location}</h5>
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    )
}