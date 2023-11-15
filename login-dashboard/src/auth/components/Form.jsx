/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Button } from "./Button"
import { useForm } from "../hooks/useForm"
export function Form() {
    const inputStyle = 'w-full px-4 py-2 rounded-xl shadow-inner focus:outline-none'
    const { handleSubmit, handleInputChange, formData } = useForm()


    return (
        <form className="shadow-xl shadow-green-300/20 rounded-xl flex flex-col items-center px-9 py-6 gap-6 border border-solid"
            onSubmit={handleSubmit}>
            <div className="flex flex-col items-center">
                <img src="https://media2.giphy.com/media/Yo2fMrTG6dgLdiKX2z/giphy.gif?cid=6c09b952o21wwvpl3vvp5j3yo1lcmqtojsoeuia34ho8e2gf&ep=v1_gifs_search&rid=giphy.gif&ct=s"
                    alt="Portal GIF"
                    className="w-1/3" />
                <h1 className="font-bold text-2xl text-white">Rick & Morty Dashboard</h1>
                <p className="text-white">Checkout info about your favorite characters</p>
            </div>
            <div
                className="flex flex-col items-center gap-4 w-2/5">
                <input
                    className={inputStyle}
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />
                <input className={inputStyle}
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                />
                <Button />
            </div>
            <p
                className="text-xs hover:cursor-pointer hover:text-green-300 text-white">Forgot your password?</p>
        </form>
    )
}