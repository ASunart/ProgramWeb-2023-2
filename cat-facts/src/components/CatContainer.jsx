/* eslint-disable react/prop-types */
export function CatContainer({image, text, isLoading}) {
    if (isLoading) {
        return <img className='w-20' src="https://i.pinimg.com/originals/80/5d/92/805d9290bf80860153c6804cc0ed2d3a.gif" alt="Loading Cat" />
    }

    if(!text){
        return <p>Click the button to discover a cat fact</p>
    }
    return (
        <section className="grid place-items-center">
            <img 
            src={image} 
            alt="Cat image"
            className="h-auto max-w-md rounded-lg shadow-md dark:shadow-gray-800 m-4"
             />
            <p className="tracking-tighter text-gray-500 md:text-lg dark:text-gray-400 text-center p-2 w-3/4 max-w-screen-md">{text}</p>
        </section>
    )
}