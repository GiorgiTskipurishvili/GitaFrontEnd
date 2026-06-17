export default function ProductCard({product, cartCount, setCartCount}) {
    let {id,title,price,category} = product
    const cardClass = `card ${category === "Electronics" ?  "electronics-card":"other-card"}`
  return (
    <div className={cardClass}>
        <h1>Product Lists</h1>
        <div>
            <span>#{id}</span>
            <h2>{title}</h2>
            <p>{price}</p>

            <button onClick={() =>{
                setCartCount(cartCount+1)
            }}>Add to cart</button>
        </div>
    </div>
  )
}
