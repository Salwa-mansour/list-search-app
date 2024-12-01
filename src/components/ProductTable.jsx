
function ProductCategoryRow({category}){
    return(
        <tr>
          <td colSpan={2}>{category}</td>
       </tr>
    );
}
function ProductRow({product}){
   const colorStyle = product.stocked ? 'inherit':'salmon'
    

    return(
        <tr>
            <td style={{color:colorStyle}}>
                 {product.name}</td>
            <td>{product.price}</td>
        </tr>
    );
}
function ProductTable({products,textFilter,onStockOnly}){
    const rows =[];
    let lastCategory = null;
     // this code assume that product array already sorted by category
     products.forEach((product) => {
        if (
         !product.name.toLowerCase().includes(
            textFilter.toLowerCase()
          ) 
        ) {
          return;
        }
        if (onStockOnly && !product.stocked) {
          return;
        }
        if (product.category !== lastCategory) {
          rows.push(
            <ProductCategoryRow
              category={product.category}
              key={product.category} />
          );
        }
        rows.push(
          <ProductRow
            product={product}
            key={product.name} />
        );
        lastCategory = product.category;
      });
    
    
    return(
        <table>
            <thead>
                <tr> 
                    <th scope="col" >Name</th>
                    <th scope="col" >Price</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}
export default ProductTable