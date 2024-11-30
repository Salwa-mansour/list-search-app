function SearchBar(){
    return (
        <div>
            <input type="text" />
            <div>
                <input id="in-stoke" type="checkbox" /> 
                <label htmlFor="in-stoke">Only show products in stock</label>
            </div>
           
        </div>
    )
}

export default SearchBar