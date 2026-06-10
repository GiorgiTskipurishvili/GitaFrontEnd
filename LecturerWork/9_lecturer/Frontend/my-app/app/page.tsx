// "use client"
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import axios from "axios"

// interface ProductInterface{
//   name: string,
//   price: number,
//   category: string,
//   description: string,
//   _id: string
// }

// export default function Home() {
//   const [products, setProducts] = useState<ProductInterface[]>([])
//   async function fetchPosts(){
//     try{
//       let res = await axios.get("http://localhost:3001/products")
//       console.log(res.data)
//       setProducts(res.data)
//     }catch(error){
//       console.log(error, "fetch posts error")
//     }
//   }

//   useEffect(() => {
//     fetchPosts()
//   }, [])


//   return (
//   <>
//    <h1>wwd  </h1>
//     {
//       products.map((el, index)=>(
//        <div key={index} className="flex gap-5 bg-[aqua] text-black border-2 py-8 rounded-xl w-[60%]">
//         <div>
//           Name: {el.name}
//         </div>
//         <div>
//           Price: {el.price}
//         </div>
//         <div>
//           Category: {el.category}
//         </div>
//         <div>
//           Description: {el.description}
//         </div>
//        </div>
//       ))
//     }

//   </>
//   );
// }


"use client";

import axios from "axios";
import { useEffect, useState } from "react";

interface ProductInterface {
  _id: string;
  name: string;
  price: number;
  category: string;
  description: string;
}

export default function Home() {
  const [products, setProducts] = useState<ProductInterface[]>([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const [editingId, setEditingId] = useState("");

  async function fetchProducts() {
    try {
      const res = await axios.get("http://localhost:3001/products");
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  async function addProduct() {
    try {
      await axios.post("http://localhost:3001/products", {
        name,
        price,
        category,
        description,
      });

      setName("");
      setPrice("");
      setCategory("");
      setDescription("");

      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteProduct(id: string) {
    try {
      await axios.delete(`http://localhost:3001/products/${id}`);
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  }

  async function updateProduct() {
    try {
      await axios.put(`http://localhost:3001/products/${editingId}`, {
        name,
        price,
        category,
        description,
      });

      setEditingId("");
      setName("");
      setPrice("");
      setCategory("");
      setDescription("");

      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  }

  function handleEdit(product: ProductInterface) {
    setEditingId(product._id);
    setName(product.name);
    setPrice(String(product.price));
    setCategory(product.category);
    setDescription(product.description);
  }

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-10">
        Product CRUD App
      </h1>

      <div className="flex flex-col gap-3 w-100 mb-10">
        <input
          className="border p-2"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="border p-2"
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          className="border p-2"
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <textarea
          className="border p-2"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {editingId ? (
          <button
            onClick={updateProduct}
            className="bg-yellow-500 text-white p-2 rounded"
          >
            Update Product
          </button>
        ) : (
          <button
            onClick={addProduct}
            className="bg-green-500 text-white p-2 rounded"
          >
            Add Product
          </button>
        )}
      </div>

      <div className="flex flex-col gap-5">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-xl p-5 flex flex-col gap-2"
          >
            <h2 className="text-xl font-bold">
              {product.name}
            </h2>

            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <p>{product.description}</p>

            <div className="flex gap-3 mt-3">
              <button
                onClick={() => handleEdit(product)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Edit
              </button>

              <button
                onClick={() => deleteProduct(product._id)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}