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
          <Route path="/act" element={<Act1 />} />
          <Route path="/act_2" element={<Act2 />} />
          <Route path="/allure_of_music" element={<Allure />} />
          <Route path="/valentine_2" element={<Valentine2 />} />
          <Route path="/a_mouth" element={<A_mouth />} />
          <Route path="/block" element={<Block />} />
          <Route path="/can_i" element={<Can_I/>}/>
          <Route path="/circle_of_none" element={<Circle/>}/>
          <Route path="/cyber" element={<Cyber/>}/>
          <Route path="dreams" element={<Dreams/>}/>

          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="" element={}></Route>
          


          
          
        <Route path="" element={}/>
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
