import Search from "./Search";
import Getverified from "./Getverified";
import Whatshappening from "./Whatshappening";

const RightSideBar = () => {
    return (
    <div className="rightsidebar">
    {/* <div className="tooltip">
  Hover over me
  <span className="tooltip-text">This is a tooltip</span>
</div> */}
    <div className="sticky-search">
    <Search/>
    </div>
    <div className="p-verify">
    <Getverified/>
    <Whatshappening/>
    </div>
    </div>
)
}

export default RightSideBar
