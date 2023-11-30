export function NotFound() {
    return (
        <div className="space-y-8 flex items-center justify-center mt-12">
            <div className="flex flex-col items-start my-3 me-4 md:items-center md:flex-row md:mb-0">
                <div className="flex items-center mb-2 border-gray-200 md:pe-4 md:me-4 md:border-e md:mb-0 dark:border-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 me-2 text-gray-500 dark:text-gray-400" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 7v4a1 1 0 0 0 1 1h3" /><path d="M7 7v10" /><path d="M10 8v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1z" /><path d="M17 7v4a1 1 0 0 0 1 1h3" /><path d="M21 7v10" /></svg>
                    <span className="self-center text-lg font-semibold whitespace-nowrap text-gray-500 dark:text-gray-400">error</span>
                </div>
                <p className="flex items-center text-2xl font-semibold text-gray-700 dark:text-gray-200">Not found</p>
            </div>
        </div>
    )
}