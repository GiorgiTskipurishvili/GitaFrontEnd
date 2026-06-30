import type { IUser } from "../interface"

interface Props{
    user: IUser
}

export default function UserCard({user}: Props) {
  return (
    <div className="card">
        <h2>{user.name}</h2>
        <p><b>Username:</b> {user.username}</p>
        <p><b>Email:</b> {user.email}</p>
        <p><b>Phone:</b> {user.phone}</p>
        <p><b>Website:</b> {user.website}</p>
        <p><b>Company:</b> {user.company.name}</p>
    </div>
  )
}
