export function Home() {

    return (
        <div className="flex justify-end hidden">
            <div className="relative w-100 shadow-lg">
                <div className="absolute right-14 top-0 h-4 w-4 translate-x-1/2 -translate-y-1/2 rotate-45 transform bg-white dark:bg-gray-800 border-2 border-r-0 border-b-0 border-gray-500 dark:border-gray-400"></div>
                <div className="px-8 z-10 bg-white dark:bg-gray-800 rounded-lg border-2 border-gray-500 dark:border-gray-400">
                    <h1 className="mt-6 text-2xl font-bold text-gray-600 dark:text-white">Hi!</h1>
                    <p className="mb-6 text-xl text-gray-600 dark:text-white">Search for a player and see his card</p>
                </div>
            </div>            
        </div>
    )
}