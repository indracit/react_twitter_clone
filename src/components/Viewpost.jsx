import { useState } from 'react';
import '../styles/sidebar.scss';
import {BsThreeDots} from 'react-icons/bs';

const userDetails = [{
userId: 1,
name:'Indrajith',
username:'indraji746463',
isVerified : true,
}]

const post = [
  {
    postId:1,
    body : 'In every day, there are 1,440 minutes. That means we have 1,440 daily opportunities to make a positive impact.',
    otherDetails : {
      comments: 200,
      retweets : 100,
      likes : 400,
      views : 288,
    }, userId : 1,
    postedtime:'2h'
  },
  {
    postId:2,
    body : 'You are never too old to set another goal or to dream a new dream.',
    otherDetails : {
      comments: 200,
      retweets : 100,
      likes : 400,
      views : 288,
    }, userId : 1,
    postedtime:'4h'
  },
  {
    postId:3,
    body : 'Optimism is the faith that leads to achievement. Nothing can be done without hope and confpostIdence.',
    otherDetails : {
      comments: 200,
      retweets : 100,
      likes : 400,
      views : 288,
    }, userId : 1,
    postedtime:'5h'
  },
  {
    postId:4,
    body : 'It always seems impossible until its done.',
    otherDetails : {
      comments: 200,
      retweets : 100,
      likes : 400,
      views : 288,
    }, userId : 1,
    postedtime:'6h'
  },
  {
    postId:5,
    body : 'It does not matter how slowly you go as long as you do not stop.',
    otherDetails : {
      comments: 200,
      retweets : 100,
      likes : 400,
      views : 288,
    }, userId : 1,
    postedtime:'7h'
  },
  {
    postId:6,
    body : 'If youre going through hell, keep going.',
    otherDetails : {
      comments: 200,
      retweets : 100,
      likes : 400,
      views : 288,
    }, userId : 1,
    postedtime:'8h'
  },
  {
    postId:7,
    body : 'It does not matter how slowly you go as long as you do not stop.',
    otherDetails : {
      comments: 200,
      retweets : 100,
      likes : 400,
      views : 288,
    }, userId : 1,
    postedtime:'9h'
  },
  {
    postId:8,
    body : 'If youre going through hell, keep going.',
    otherDetails : {
      comments: 200,
      retweets : 100,
      likes : 400,
      views : 288,
    }, userId : 1,
    postedtime:'10h'
  },
  {
    postId:9,
    body : 'Believe in yourself! Have faith in your abilities! Without a humble but reasonable confpostIdence in your own powers you cannot be successful or happy.',
    otherDetails : {
      comments: 200,
      retweets : 100,
      likes : 400,
      views : 288,
    }, userId : 1,
    postedtime:'11h'
  },
  {
    postId:10,
    body : 'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
    otherDetails : {
      comments: 200,
      retweets : 100,
      likes : 400,
      views : 288,
    }, userId : 1,
    postedtime:'12h'
  },
  {
    postId:11,
    body : 'Believe in yourself! Have faith in your abilities! Without a humble but reasonable confpostIdence in your own powers you cannot be successful or happy.',
    otherDetails : {
      comments: 200,
      retweets : 100,
      likes : 400,
      views : 288,
    }, userId : 1,
    postedtime:'13h'
  },
  {
    postId:12,
    body : 'Start where you are. Use what you have. Do what you can.',
    otherDetails : {
      comments: 200,
      retweets : 100,
      likes : 400,
      views : 288,
    }, userId : 1,
    postedtime:'14h'
  },
  {
    postId:13,
    body : 'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
    otherDetails : {
      comments: 200,
      retweets : 100,
      likes : 400,
      views : 288,
    }, userId : 1,
    postedtime:'15h'
  },
  {
    postId:14,
    body : 'Believe in yourself! Have faith in your abilities! Without a humble but reasonable confpostIdence in your own powers you cannot be successful or happy.',
    otherDetails : {
      comments: 200,
      retweets : 100,
      likes : 400,
      views : 288,
    }, userId : 1,
    postedtime:'16h'
  },
  {
    postId:15,
    body : 'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
    otherDetails : {
      comments: 200,
      retweets : 100,
      likes : 400,
      views : 288,
    }, userId : 1,
    postedtime:'17h'
  },
  {
    postId:16,
    body : 'Believe in yourself! Have faith in your abilities! Without a humble but reasonable confpostIdence in your own powers you cannot be successful or happy.',
    otherDetails : {
      comments: 200,
      retweets : 100,
      likes : 400,
      views : 288,
    }, userId : 1,
    postedtime:'18h'
  },
]


const Viewpost = () => {

  const [user] = useState(userDetails);
  const [posts] = useState(post);

  return (
    <div>
      { posts.map((data)=>  <div  key={data.postId}>
        <div className="userimg">I</div>
        <div>
          <div className='post-header'>
            <p>{userDetails.find(obj=>obj.userId===data.userId).name}</p>
            <p>{'@'+userDetails.find(obj=>obj.userId===data.userId).username}</p>
            <p>{data.postedtime}</p>
            <BsThreeDots/>
          </div>
          <div className='post-body'>
            <p>{data.body}</p>
          </div>
          <div className='post-footer'></div>
        </div>
      </div>
      )}
      
    </div>

  )  
}

export default Viewpost