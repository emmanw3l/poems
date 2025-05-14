// App.jsx
import { Routes, Route } from "react-router-dom";
import Sidebar from "./sidebar/sidebar";
import Home from "./home";
import NotFound from "./pages/notfound";
import Lorem from "./pages/lorem";
import First from "./pages/first";
import Second from "./pages/second";
import Third from "./pages/third";
import Twentysix from "./pages/26_letters";
import Fourth from "./pages/fourth";
import Act1 from "./pages/act";
import Act2 from "./pages/act_2";
import Allure from "./pages/allure_of_music";
import Valentine2 from "./pages/valentine_2";
import A_mouth from "./pages/a_mouth";
import Block from "./pages/block";
import Can_I from "./pages/can_i";
import Circle from "./pages/circle_of_none";
import Cyber from "./pages/cyber";
import Dreams from "./pages/dreams";
import Mirror_Mirror from "./pages/mirror_mirror";
import Love from "./pages/love";
import Numb from "./pages/numb";
import Paranoia_2 from "./pages/paranoia_2";
import Paranoia from "./pages/paranoia";
import Sometimes from "./pages/sometimes";
import Point from "./pages/whats_the_point";
import Snail from "./pages/the_snail";
import Asphyxiation from "./pages/asphyxiation";
import Jump from "./pages/jump";
import Why from "./pages/why";
import Vertigo from "./pages/vertigo";
import Fourth1 from "./pages/fourth_1";
import Little_birdie from "./pages/little_birdie";
import Never_love_again from "./pages/never_love_again";
import Villain from "./pages/villain";
import Time from "./pages/time";
import Autocorrect from "./pages/autocorrect";
import Strangers from "./pages/strangers";
import Boomerang from "./pages/boomerang";
import I_am from "./pages/i_am";
import Straitjacket from "./pages/straitjacket";
import Lost from "./pages/lost";
import Pluviophile from "./pages/pluviophile";
import Karma from "./pages/karma";
import Karma_2 from "./pages/karma_2";
import Forever from "./pages/forever";

// const About = () => <h2>ℹ️ About Page</h2>;
// const Contact = () => <h2>📞 Contact Page</h2>;
// const Home = () => <h1>hi, my name is...</h1>

function App() {
  return (
    <div className="">
      <Sidebar />
      <div className="p-4 flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="first" element={<First />} />
          <Route path="second" element={<Second />} />
          <Route path="/third" element={<Third />} />
          <Route path="/26_letters" element={<Twentysix />} />
          <Route path="/fourth" element={<Fourth />} />
          <Route path="/fourth_1" element={<Fourth1 />} />
          <Route path="/act" element={<Act1 />} />
          <Route path="/act_2" element={<Act2 />} />
          <Route path="/allure_of_music" element={<Allure />} />
          <Route path="/valentine_2" element={<Valentine2 />} />
          <Route path="/a_mouth" element={<A_mouth />} />
          <Route path="/block" element={<Block />} />
          <Route path="/can_i" element={<Can_I />} />
          <Route path="/circle_of_none" element={<Circle />} />
          <Route path="/cyber" element={<Cyber />} />
          <Route path="dreams" element={<Dreams />} />
          <Route path="/mirror_mirror" element={<Mirror_Mirror />} />
          <Route path="love" element={<Love />} />
          <Route path="/numb" element={<Numb />} />
          <Route path="paranoia_2" element={<Paranoia_2 />} />
          <Route path="paranoia" element={<Paranoia />} />
          <Route path="sometimes" element={<Sometimes />} />
          <Route path="whats_the_point" element={<Point />} />
          <Route path="the_snail" element={<Snail />} />
          <Route path="asphyxiation" element={<Asphyxiation />} />
          <Route path="jump" element={<Jump />} />
          <Route path="why" element={<Why />} />
          <Route path="vertigo" element={<Vertigo />} />
          <Route path="little_birdie" element={<Little_birdie />} />
          <Route path="never_love_again" element={<Never_love_again />} />
          <Route path="villain" element={<Villain />} />
          <Route path="time" element={<Time />} />
          <Route path="autocorrect" element={<Autocorrect />} />
          <Route path="strangers" element={<Strangers />} />
          <Route path="boomerang" element={<Boomerang />} />
          <Route path="i_am" element={<I_am />} />
          <Route path="straitjacket" element={<Straitjacket />} />
          <Route path="lost" element={<Lost />} />
          <Route path="pluviophile" element={<Pluviophile/>} />
          <Route path="karma" element={<Karma/>}/>
          <Route path="karma_2" element={<Karma_2/>}/>
          <Route path="forever" element={<Forever/>}/>



          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/*
          


        
        <Route path="" element={}/>
        <Route path="" element={}/>

        <Route path="" element={}/>
        <Route path="" element={}/>
        <Route path="" element={}/>
        <Route path="" element={}/>
        <Route path="" element={}/>
        <Route path="" element={}/> */}

          <Route path="/lorem" element={<Lorem />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
