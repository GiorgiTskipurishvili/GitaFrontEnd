function ChildComponent(props){
  console.log(props)
  return(
    <>
      {/* <h2 className='changeColor'>This is child component</h2> */}
      <div>
        <h1>My name is {props.name} and my age is {props.age}</h1>
        <h2>My food is {props.favouriteFoods}</h2>
      </div>
      <div>
        <img src={props.images.weatherImage} alt="amindisfoto" />
      </div>
    </>
  )
}

export default ChildComponent
