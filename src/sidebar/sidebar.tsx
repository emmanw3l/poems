import React, { useState } from "react";

import { NavLink } from "react-router-dom";
// import { Outlet } from "react-router-dom"; `
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./sidebar.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Sidebar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className={`sticky-top layout ${isSidebarOpen ? "sidebar-open" : ""}`}>
      {/* Navbar */}
      <nav className="navbar  px-3  d-flex justify-content-between">
        <span className=" h1">
          <NavLink to="/" className="nav-link">
            <FontAwesomeIcon icon={faHome} />
          </NavLink>
        </span>
        {/* <span className="mb-0 h1">Emmanuel's poetry</span> */}

        <button
          className="btn btn-outline-secondary btn-lg"
          onClick={toggleSidebar}
        >
          <FontAwesomeIcon icon={isSidebarOpen ? faXmark : faBars} />
        </button>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar  border-start shadow-sm`}>
        <div className="p-3">
          <p className="h3 text-center">
            <strong>Poems</strong>
          </p>
          {/* Add your nav links here */}

          <ol className="p-3 text-center " onClick={toggleSidebar}>
            <li>
              <NavLink to="explicit" className="link">
                explicit
              </NavLink>
            </li>
            <li>
              <NavLink to="first" className="link">
                1ST OF MANY
              </NavLink>
            </li>
            <li>
              <NavLink to="second" className="link">
                2ND OF MANY
              </NavLink>
            </li>
            <li>
              <NavLink to="/26_letters" className="link ">
                26 LETTERS
              </NavLink>
            </li>
            <li>
              <NavLink to="/third" className="link">
                3RD OF MANY
              </NavLink>
            </li>
            <li>
              <NavLink to="fourth_1" className="link">
                4TH OF MANY <span className="it">(original version)</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/fourth" className="link">
                4TH OF MANY <br />
                <span className="it">(updated)</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/fifth" className="link">
                5TH OF MANY
              </NavLink>
            </li>
            <li>
              <NavLink to="a_mouth" className="link">
                A MOUTH, A HEART, AN EYE
              </NavLink>
            </li>
            <li>
              <NavLink to="valentine" className="link">
                A RED VALENTINE
              </NavLink>
            </li>
            <li>
              <NavLink to="valentine_2" className="link">
                A RED VALENTINE 2
              </NavLink>
            </li>
            <li>
              <NavLink to="/act" className="link">
                ACT 1
              </NavLink>
            </li>
            <li>
              <NavLink to="act_2" className="link">
                ACT 2
              </NavLink>
            </li>
            <li>
              <NavLink to="act_3" className="link">
                ACT 3
              </NavLink>
            </li>
            <li>
              <NavLink to="allure_of_music" className="link">
                ALLURE OF MUSIC
              </NavLink>
            </li>

            <li>
              <NavLink to="am_I" className="link">
                AM I?
              </NavLink>
            </li>
            <li>
              <NavLink to="asphyxiation" className="link">
                ASPHYXIATION
              </NavLink>
            </li>
            <li>
              <NavLink to="autocorrect" className="link">
                AUTOCORRECT
              </NavLink>
            </li>
            <li>
              <NavLink to="block" className="link">
                BLOCK
              </NavLink>
            </li>
            <li>
              <NavLink to="boomerang" className="link">
                BOOMERANG
              </NavLink>
            </li>
            <li>
              <NavLink to="can_i" className="link">
                CAN I RISE UP
              </NavLink>
            </li>
            <li>
              <NavLink to="circle_of_none" className="link">
                CIRCLE OF NONE
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="link">
                CORONER
              </NavLink>
            </li>
            <li>
              <NavLink to="cyber" className="link">
                CYBER
              </NavLink>
            </li>
            <li>
              <NavLink to="death" className="link">
                DEATH
              </NavLink>
            </li>
            <li>
              <NavLink to="dreams" className="link">
                DREAMS
              </NavLink>
            </li>
            <li>
              <NavLink to="forever" className="link">
                FOREVER
              </NavLink>
            </li>
            <li>
              <NavLink to="glass" className="link">
                GLASS
              </NavLink>
            </li>
            <li>
              <NavLink to="goals" className="link">
                GOALS
              </NavLink>
            </li>
            <li>
              <NavLink to="gone" className="link">
                GONE
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="link">
                HAPPINESS
              </NavLink>
            </li>
            <li>
              <NavLink to="head_to_hades" className="link">
                HEAD TO HADES
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="link">
                HO HO HO
              </NavLink>
            </li>
            <li>
              <NavLink to="home" className="link">
                HOME
              </NavLink>
            </li>

            <li>
              <NavLink to="home_2" className="link">
                HOME 2
              </NavLink>
            </li>
            <li>
              <NavLink to="i_am" className="link">
                I AM
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="link">
                IS THIS LOVE?
              </NavLink>
            </li>
            <li>
              <NavLink to="jump" className="link">
                JUMP
              </NavLink>
            </li>
            <li>
              <NavLink to="karma_prelude" className="link">
                KARMA 
                <span className="it">(prelude)</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="karma" className="link">
                KARMA
              </NavLink>
            </li>
            <li>
              <NavLink to="karma_2" className="link">
                KARMA 2
              </NavLink>
            </li>
            <li>
              <NavLink to="life" className="link">
                LIFE
              </NavLink>
            </li>
            <li>
              <NavLink to="little_birdie" className="link">
                LITTLE BIRDIE
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="link">
                LOSS
              </NavLink>
            </li>
            <li>
              <NavLink to="lost" className="link">
                LOST
              </NavLink>
            </li>
            <li>
              <NavLink to="love" className="link">
                LOVE ?
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="link">
                LOVE? <span className="it">(updated version)</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="link">
                MAN IN THE MIRROR
              </NavLink>
            </li>
            <li>
              <NavLink to="mirror_mirror" className="link">
                MIRROR MIRROR
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="link">
                MURDEROUS INTENTIONS
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="link">
                MURDEROUS INTENTIONS 2
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="link">
                MURDEROUS INTENTIONS 3
              </NavLink>
            </li>
            <li>
              <NavLink to="never_love_again" className="link">
                NEVER LOVE AGAIN
              </NavLink>
            </li>
            <li>
              <NavLink to="numb" className="link">
                NUMB
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="link">
                ORDER
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="link">
                OREO'S TWEET
              </NavLink>
            </li>
            <li>
              <NavLink to="paranoia" className="link">
                PARANOIA
              </NavLink>
            </li>
            <li>
              <NavLink to="paranoia_2" className="link">
                PARANOIA 2
              </NavLink>
            </li>
            <li>
              <NavLink to="perhaps" className="link">
                PERHAPS
              </NavLink>
            </li>
            <li>
              <NavLink to="pluviophile" className="link">
                PLUVIOPHILE
              </NavLink>
            </li>
            <li>
              <NavLink to="pretence" className="link">
                PRETENCE
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="link">
                QUADRIPLEGIC
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="link">
                REMINISCING ABOUT A DEAD LOVED ONE
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="link">
                ROSES ARE RED
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="link">
                SHE LEFT
              </NavLink>
            </li>
            <li>
              <NavLink to="silence" className="link">
                SILENCE
              </NavLink>
            </li>
            <li>
              <NavLink to="sometimes" className="link">
                SOMETIMES
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="link">
                SQUIRM
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="link">
                STORY OF MINE 1
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="link">
                STORY OF MINE 2
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="link">
                STORY OF MINE 3
              </NavLink>
            </li>
            <li>
              <NavLink to="straitjacket" className="link">
                STRAITJACKET
              </NavLink>
            </li>
            <li>
              <NavLink to="strangers" className="link">
                STRANGERS
              </NavLink>
            </li>
            <li>
              <NavLink to="sunset" className="link">
                SUNSET
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="link">
                THE HUNT
              </NavLink>
            </li>
            <li>
              <NavLink to="the_old_me" className="link">
                THE OLD ME
              </NavLink>
            </li>
            <li>
              <NavLink to="the_snail" className="link">
                THE SNAIL
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="link">
                THE WATCHER
              </NavLink>
            </li>

            <li>
              <NavLink to="time" className="link">
                TIME
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="link">
                TIME 2
              </NavLink>
            </li>
            <li>
              <NavLink to="vertigo" className="link">
                VERTIGO
              </NavLink>
            </li>
            <li>
              <NavLink to="villain" className="link">
                VILLAIN
              </NavLink>
            </li>
            <li>
              <NavLink to="whats_the_point" className="link">
                WHAT'S THE POINT
              </NavLink>
            </li>
            <li>
              <NavLink to="why" className="link">
                WHY?
              </NavLink>
            </li>
            <li>
              <NavLink to="why_2" className="link">
                WHY 
              </NavLink>
            </li>

            <li>
              <NavLink to="" className="link"></NavLink>
            </li>
          </ol>
        </div>
      </div>

      {/* Main Content */}
      {/* <main className="main-content container py-4">
        <Outlet />
      </main> */}
    </div>
  );
};

export default Sidebar;
