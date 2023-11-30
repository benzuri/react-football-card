const NoResult = () => {
    return (
        <div className="space-y-8 flex items-center justify-center mt-12">
            <div className="flex flex-col items-start my-3 me-4 md:items-center md:flex-row md:mb-0">
                <div className="flex items-center mb-2 border-gray-200 md:pe-4 md:me-4 md:border-e md:mb-0 dark:border-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 me-2 text-gray-500 dark:text-gray-400" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg>
                    <span className="self-center text-lg font-semibold whitespace-nowrap text-gray-500 dark:text-gray-400">Info</span>
                </div>
                <p className="flex items-center text-2xl font-semibold text-gray-700 dark:text-gray-200">No results found</p>
            </div>
        </div>
    )
}

export default NoResult;