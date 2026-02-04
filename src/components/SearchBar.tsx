import { FaSearch } from "react-icons/fa";

interface SearchBarProps {
    searchItem: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchBar ({searchItem, handleChange}:SearchBarProps ){
    return (
        <>
            <FaSearch className='search-icon' />
            <input id='main-searcher' name='filter' className='recipe-search default-search' type='text' value={searchItem} onChange={(e) => handleChange(e)} placeholder='Busca una receta (ej. Lasaña, Tacos, Brownies...)'></input>
        </>
    )
}

export default SearchBar