import { useState } from "react"
import {BsThreeDots} from 'react-icons/bs'

const trendList = [
    {   id :1,
        topic:'trending in india',
        hashtag : '#threads',
        tweets : '10k'
    },
    {   id : 2,
        topic:'trending in india',
        hashtag : '#mark',
        tweets : '69k'
    },
    {   id : 2,
        topic:'trending in india',
        hashtag : '#mark',
        tweets : '69k'
    },
    {   id : 2,
        topic:'trending in india',
        hashtag : '#mark',
        tweets : '69k'
    },
    {   id : 2,
        topic:'trending in india',
        hashtag : '#mark',
        tweets : '69k'
    },
    {   id : 2,
        topic:'trending in india',
        hashtag : '#mark',
        tweets : '69k'
    },
    {    id: 3,
        topic:'trending in india',
        hashtag : '#elon',
        tweets : '20k'
    }
]

const Trending = () => {

    const [trends] = useState(trendList);

    return (
    <div>
        {trends.map((trend)=> <div key={trend.id} className="trends" >
                                <div>
                                <p className="topic">{trend.topic}</p>
                                <p className="hashtag">{trend.hashtag}</p>
                                <p className="tweets">{`${trend.tweets} tweets`}</p>
                                </div>
                                <div className="trend-dot">
                                <BsThreeDots/>
                                </div>
                                </div>
        )}
    </div>
    )
}

export default Trending