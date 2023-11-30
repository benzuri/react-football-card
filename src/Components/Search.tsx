import { useState, useEffect } from 'react';
import SearchResult from './SearchResult';
import SearchBar from './SearchBar';
import axios from 'axios';

const Search = () => {
    const [stories, setStories] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [search, setSearch] = useState('');

    const apiUrlSearch = import.meta.env.VITE_API_URL_SEARCH;

    // To clear react search widget when click on body
    document.body.addEventListener('click', (e) => {
        clearData(e);
    });

    useEffect(() => {
        let stortedStories = null;

        const getData = setTimeout(() => {
            if (search) {
                axios
                    .get(apiUrlSearch + search)
                    .then((response) => {
                        stortedStories = response.data.results;
                        setKeyword(keyword);
                        setStories(stortedStories);
                    });
            } else {
                setStories(null);
            }
        }, 1000)
        return () => clearTimeout(getData)

    }, [search])

    function clearData(e) {
        if (e.target.id != 'search') {
            setSearch('');
            setStories(null);
        }
    }

    return (
        <div className="flex-1 flex-col">
            <SearchBar search={search} onChange={setSearch} />
            <SearchResult stories={stories} />
        </div>
    )
}

export default Search;