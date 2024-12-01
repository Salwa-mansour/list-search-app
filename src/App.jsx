import { useState } from 'react'
import './App.css'
import SearchBar from './components/searchBar'
import ProductTable from './components/ProductTable'
const PRODUCTS = [
                  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
                  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
                  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
                  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
                  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
                  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
                ]
function FilterableProductTable({products}) {
    const [textFilter,setTextFilter] = useState('');
    const [onStockOnly,setOnStockOnly] = useState(false);
  return (
    <div>
      <SearchBar textFilter={textFilter} setTextFilter={setTextFilter} 
                 onStockOnly={onStockOnly} setOnStockOnly={setOnStockOnly} />
      <ProductTable  products={products} 
                    textFilter={textFilter}
                    onStockOnly={onStockOnly}/>
    </div>
  )
}

function App(){
  return <FilterableProductTable products={PRODUCTS} />
}

export default App
