// import "./index.css";
import "./home.css";
// import Slate from "./pages/slate/slate";
// import "../public/img2.png"
// import Genres from "./genres";
import WattpadIcon from "./assets/icons/wattpad";
// import Spotify from "./assets/icons/spotify";
// import { NavLink } from "react-router-dom";
import ProfileHeader from "./profile/profile";
import { MyLinks } from "./assets/links/mylinks";
import Github from "./assets/icons/github";
import Instagram from "./assets/icons/instagram";

export default function Home() {
  return (
    <>
      <div className="containers ">
        <ProfileHeader
          coverPhotoUrl="/desk.jpg"
          profilePhotoUrl="/img2.png"
          name="Emmanuel"
        />

        <div className="mt d-flex col-6 mx-auto justify-content-between">
          <span>
            <a href={MyLinks.wattpad} target="_blank" rel="noopener noreferrer">
              <WattpadIcon />
            </a>
          </span>
          <span>
            <a
              href={MyLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
          </span>
          <span>
            <a href={MyLinks.github} target="_blank" rel="noopener noreferrer">
              <Github />
            </a>
          </span>
        </div>
        <div className="m-3">
          <p>
            Hi, my name is emmanuel and this is a collection of majority of the poetry I've written over the years.

          </p>
          <p>
            Typically, I'd just post the poems and leave it at that, but this time I also want to add whatever it was that inspired me (if any). <br />
            Unfortunately, I can't add dates to all of them as I barely keep track of those so bear with the inconsistencies. With that being said, <br />
            <span className="mx-auto text-center h4">Welcome</span>
          </p>
        </div>
      </div>
      {/* <Genres/> */}
    </>
  );
}
