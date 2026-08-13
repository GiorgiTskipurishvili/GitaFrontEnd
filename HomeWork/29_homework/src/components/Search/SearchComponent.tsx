import SearchIcon from "../../assets/search.svg"
export default function SearchComponent() {
  return (
    <div>
        <img src={SearchIcon} alt="SearchIcon" />
        <input type="text" placeholder="Search for movies or TV series" />
    </div>
  )
}
