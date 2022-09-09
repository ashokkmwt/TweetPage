import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTweetAction } from '../../redux/actions/tweetActions';
import Tweet from '../AddTweet';
import styles from './index.module.css'

export default function Tweeter() {
  const [mytweet, setMytweet] = useState("");

  const generateId = () => Math.ceil(Math.random() * 10000000);

  const getTweets = useSelector(state => state.tweetReducer)


  const dispatch = useDispatch();

  const addTweet = () => {
    const id = generateId();
    const data = {
      id: id,
      mytweet: mytweet,
      status: true,
      isArchieve: false,
      options: false
    }
    dispatch(addTweetAction(data));
    setMytweet("");
  }

  const handleTweet = (e) => setMytweet(e.target.value);




  return (
    <div className={styles.parent}>
      <div className={styles.home}>
        <div className={styles.homeTop}>
          <div className={styles.addTweet}>
            <input onChange={handleTweet} value={mytweet} placeholder="What's happening?" />
            <button onClick={addTweet}>Tweet</button>
          </div>
        </div>
        <div className={styles.homeBottom}>
          {getTweets.map((tweet) => {
            return (
              <React.Fragment key={tweet.id}>
                <Tweet data={tweet} />
              </React.Fragment>
            )
          })}
        </div>
      </div>
    </div>
  )
}
