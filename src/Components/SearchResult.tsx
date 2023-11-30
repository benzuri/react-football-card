import { Link, To, useNavigate } from "react-router-dom";

const SearchResult = ({ stories = [] }) => {
    function changeLocation(placeToGo: To) {
        const navigate = useNavigate();
        navigate(placeToGo, { replace: true });
        //window.location.reload();
    }

    return (
        <div className="z-10 absolute mt-6 min-w-lg max-w-2xl text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            {stories && stories.map(({ id, text }) => (
                text && id &&
                <div key={id} className="block w-full px-4 py-3 rounded cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                    <Link to={`../player/${id}`} onClick={() => changeLocation(`../player/${id}`)}>
                        {text}
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default SearchResult;