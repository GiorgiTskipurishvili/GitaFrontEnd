import React from 'react'

export default async function page({params}:{params:Promise<{productid:string}>}) {
    const {productid} = await params
    console.log(productid)
  return (
    <>
    <div className='m-auto text-5xl'>Product ID: {productid}</div>
    </>
  )
}
