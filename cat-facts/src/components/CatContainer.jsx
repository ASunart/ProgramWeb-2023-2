/* eslint-disable react/prop-types */
export function CatContainer({ image, text, isLoading, error }) {
    if (isLoading) {
        return (
            <div role="status" className="animate-pulse md:flex-col md:items-center md:justify-center md:gap-2">
                <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                    <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                    </svg>
                </div>
                <div className="w-full my-5">
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                </div>
                <span className="sr-only">Loading...</span>
            </div>
        )
    }

    if (error) {
        return <p className="tracking-tighter text-gray-500 md:text-lg dark:text-gray-400 text-center p-2 w-3/4 max-w-screen-md">
            {error}
        </p>
    }

    if (!text) {
        return <p
            className="tracking-tighter text-gray-500 md:text-lg dark:text-gray-400 text-center p-2 w-3/4 max-w-screen-md">
            Click the button to discover a cat fact
        </p>
    }
    return (
        <section className="grid place-items-center p-2">
            <img
                src={image}
                alt="Cat image"
                className="h-auto max-w-sm rounded-lg shadow-md dark:shadow-gray-800 m-4"
            />
            <p className="tracking-tighter text-gray-500 md:text-lg dark:text-gray-400 text-center p-2 w-3/4 max-w-screen-md">{text}</p>
        </section>
    )
}