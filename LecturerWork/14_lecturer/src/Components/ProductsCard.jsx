
export default function ProductsCard({ product, onAddToCart }) {
    const { title, price, category } = product
    
  return (
    <>
      <div>
        <span>{category}</span>
        <h3>{title}</h3>
        <p>ფასი: {price}</p>
      </div>

      <div>
        <button onClick={onAddToCart}>Add to cart</button>
      </div>
    </>
  )
}
