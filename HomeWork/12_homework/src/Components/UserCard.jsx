/*
<UserCard /> კომპონენტს Props-ით უნდა გადაეცეს მომხმარებლის ყველა მონაცემი.
კომპონენტის შიგნით სწორად უნდა გამოაჩინოთ სახელი, ასაკი, სურათი და სკილები.
დინამიური ClassName:
თუ მომხმარებლის role არის "Admin", ბარათს (CSS-ში) უნდა დაედოს განსხვავებული ფონი (მაგალითად, წითელი ან ოქროსფერი ჩარჩო/ბექგრაუნდი), ხოლო ჩვეულებრივ მომხმარებელზე - სტანდარტული(ფერითქვენ მოიფიქრეთ).
*/
export default function UserCard(props) {
  return (
    <div className={props.role === "Admin" ? "admin" : "user"}>
      <img src={props.photo} alt={props.name} />

      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Role: {props.role}</p>


      <div>
        <h1>Skills</h1>
        {
            props.skills.map((el, index)=>(
                <p key={index}>{el}</p>
            ))
        }
      </div>
    </div>
  )
}
