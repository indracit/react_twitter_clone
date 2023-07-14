import Addpost from "../components/Addpost"
import Viewpost from "../components/Viewpost"
import '../styles/home.scss';
const Home = () => {
    return (
    <div className="home">
        <Addpost/>
        <Viewpost/>

    </div>
    )
}

export default Home