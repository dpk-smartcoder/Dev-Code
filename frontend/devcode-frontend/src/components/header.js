import React from "react"
import { NavLink } from "react-router-dom";
function Header(){
    return <div className="bg-blue-950 font-bold flex justify-between"><h1 className="text-white text-2xl p-2 m-2">Dev<span className="text-red-700">Code</span></h1>
    <ul className="flex space-x-4 mr-8">
        <li className="text-white text-lg hover:bg-blue-800 rounded-lg p-2 m-2 hover:opacity-90"><NavLink to={"/"}>Home</NavLink></li>
        <li className="text-white text-lg hover:bg-blue-800 rounded-lg p-2 m-2 hover:opacity-90"><NavLink to={"/pastcontests"} >Past Contests</NavLink></li>
        <li className="text-white text-lg hover:bg-blue-800 rounded-lg p-2 m-2 hover:opacity-90"><NavLink to={"/upcomingcontest"} >UpcomingContest</NavLink></li>
        <li className="text-white text-lg hover:bg-blue-800 rounded-lg p-2 m-2 hover:opacity-90"><NavLink to={"/contribute"} >Contribute a Question</NavLink></li>
        <li className="text-white text-lg hover:bg-blue-800 rounded-lg p-2 m-2 hover:opacity-90"><NavLink to={"/about"} >About</NavLink></li>
        <li className="text-white text-lg hover:bg-blue-800 rounded-lg p-2 m-2 m-r-2 hover:opacity-90"><NavLink to={"/login"} >Login</NavLink></li>
    </ul>
</div>
}
export default Header;