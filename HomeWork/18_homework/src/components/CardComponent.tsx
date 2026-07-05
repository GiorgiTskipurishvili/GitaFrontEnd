import "./Card.css";
import Link from "../assets/link.svg"
import Organization from "../assets/organization.svg"
import Twitter from "../assets/twitter.svg"
import Location from "../assets/location.svg"
import WhiteLink from "../assets/whiteLink.svg"
import WhiteOrganization from "../assets/whiteOrganization.svg"
import WhiteTwitter from "../assets/whiteTwittersvg.svg"
import WhiteLocation from "../assets/whiteLocation.svg"
import type { GitHubUser } from "../types";
type Props = {
  user: GitHubUser;
  theme: string;
};

export default function CardComponent({ user, theme }:Props) {
  return (
    <div className="card-container">
      <div className="user-img">
         <img src={user.avatar_url} alt="" />
      </div>

      <div className="user-about">
        <div className="user-about__header">
          <div className="user-title">
            <h1>{user.name || user.login}</h1>
            <p>
              Joined <span>
             {new Date(user.created_at).toLocaleDateString("en-GB", {
               day: "2-digit",
               month: "short",
               year: "numeric",
             })}
            </span></p>
          </div>

          <p className="tag">@{user.login}</p>

          <p className="bio"> {user.bio ? user.bio : "This profile has no bio"}</p>
        </div>


        <div>
          <div className={`repo-container ${theme === "dark" ? "dark" : "light"}`}>
            <div className="repo-container__inner">
              <p>Repos</p>
              <h2>{user.public_repos}</h2>
            </div>

            <div className="repo-container__inner">
              <p>Followers</p>
              <h2>{user.followers}</h2>
            </div>

            <div className="repo-container__inner">
              <p>Following</p>
              <h2>{user.following}</h2>
            </div>

          </div>

          <div className="links">
            <div className="row">
              <div className="link-container"><img  src={theme === "dark" ? WhiteLocation : Location} alt="location-icon" /> <p className={!user.location ? "muted" : ""}>{user.location || "Not Available"}</p></div>
              <div className="link-container"><img  src={theme === "dark" ? WhiteTwitter : Twitter} alt="twitter-icon" /> <p className={!user.twitter_username ? "muted" : ""}>{user.twitter_username || "Not Available"}</p></div>
            </div>
            <div className="row">
              <div className="link-container"><img src={theme === "dark" ? WhiteLink : Link} alt="twitter-icon" />
                <p className={!user.blog ? "muted" : ""}>
                  {user.blog ? (
                    <a href={user.blog.startsWith("http") ? user.blog : `https://${user.blog}`} target="_blank" rel="noreferrer">{user.blog}</a>
                  ) : (
                    "Not Available"
                  )}
              </p>
             </div>

             <div className="link-container"><img src={theme === "dark" ? WhiteOrganization : Organization} alt="organization-icon" /><p className={!user.company ? "muted" : ""}>{user.company || "Not Available"}</p></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
