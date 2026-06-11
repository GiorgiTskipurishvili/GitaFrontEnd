import "../App.css"
export default function NameComponent(props) {
  return (
    <div className={`nameBox ${props.changeColor}`}>
        <h1>my name is {props.name}</h1>

    </div>
  )
}
