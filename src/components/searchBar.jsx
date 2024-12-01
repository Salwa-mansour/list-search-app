function SearchBar({textFilter,onStockOnly,setTextFilter,setOnStockOnly}){
    return (
        <div>
            <input type="text" onChange={(e)=>setTextFilter(e.target.value)}  value={textFilter} />
            <div>
            <input 
            id="in-stoke"
            type="checkbox" 
            checked={onStockOnly} 
            onChange={(e) => setOnStockOnly(e.target.checked)} /> 
            <label htmlFor="in-stoke">Only show products in stock</label>
            </div>
           
        </div>
    )
}

export default SearchBar