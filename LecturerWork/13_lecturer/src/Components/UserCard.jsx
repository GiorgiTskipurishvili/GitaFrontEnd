

export default function UserCard({user}) {
    let {id, name, age, role,skills,photo} = user
    const cardClass = `card ${role === "Admin" ?  "admin-card":"user-card"}`
  return (
    <>
        <div className={cardClass}>
            <img src={photo} alt="image1" className="card-avatar"/>
            <div>
                <span>#{id}</span>
                <h2>{name}</h2>
                <p>Age: {age} | Role: {role}</p>
            </div>
            <div>
                {skills.map((skill, index)=> (
                    <span key={index}>
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    </>
  )
}
