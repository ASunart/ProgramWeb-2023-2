/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

export function Characters ({characters}) {

    if(!characters) return

    return (
        <ul className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-10">
            {
                characters.map(person => {

                    let colorStatus = ''

                    if(person.status === 'Alive'){
                        colorStatus = 'bg-lime-500'
                    }
                    if(person.status === 'Dead'){
                        colorStatus = 'bg-red-500'
                    }
                    if(person.status === 'unknown'){
                        colorStatus = 'bg-slate-400'
                    }

                    return (
                        <li className={`flex flex-col gap-3 bg-gray-700 text-white items-center shadow-lg rounded-lg p-4 hover:shadow-2xl hover:shadow-cyan-500 transition-all duration-200`} key={person.id}>
                            <Link to={`/character/${person.id}`} state={person}>
                                <img className="w-[150px]" src={person.image} alt="" />
                                <h1 className="font-bold text-xl">{person.name}</h1>
                                <div className="flex gap-2 items-center">
                                    <div className={`rounded-full ${colorStatus} w-2 h-2`}></div>
                                    <p>{person.status}</p>
                                </div>
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}