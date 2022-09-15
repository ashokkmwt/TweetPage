import React, { useState } from 'react'
import styles from './index.module.css';
import moreLogo from "../../assets/images/moreIcon.png";
import TweetOptions from '../MorePopup';
import { optionsAction, setArchieveAction, updateTweetAction } from '../../redux/actions/tweetActions';
import { useDispatch } from 'react-redux';



export default function AddTweet({ data }) {
    const { mytweet, id, status, isArchieve, options } = data;
    // const [isArchieve, setIsArchieve] = useState(false);

    const [readonly, setReadonly] = useState(true);

    // const [options, setoptions] = useState(false);

    const [tweet, setTweet] = useState(mytweet);

    const handleMyTweet = (e) => setTweet(e.target.value);

    const showOptions = () => {
        dispatch(optionsAction(id));
    };
 
    const updateTweet = () => {
        setReadonly(false);
        showOptions();
        // setoptions(false);
    }

    const dispatch = useDispatch();

    const saveTweet = (e) => {
        setReadonly(true);
        handleMyTweet(e);
        const updateObj = {
            oldTweet: mytweet,
            newTweet: tweet,
            id: id
        }
        dispatch(updateTweetAction(updateObj))
    }
 

    const setArchieve = () => {
        showOptions();
        const archieve = {
            id: id,
            isArchieve: isArchieve
        }
        dispatch(setArchieveAction(archieve));
        // setIsArchieve(!isArchieve);
    }



    return (
        <div style={{ backgroundColor: isArchieve && "red" }} className={styles.tweets}>
            <img onClick={showOptions} src={moreLogo} alt="Alfredo Hernandez" />
            {options &&
                <TweetOptions
                    status={status}
                    showOptions={showOptions}
                    id={id}
                    updateTweet={updateTweet}
                    isArchieve={isArchieve}
                    setArchieve={setArchieve}
                />}
            <textarea className={styles.myTweet} onChange={handleMyTweet} readOnly={readonly} value={tweet} />
            {!readonly && <h3 className={styles.saveBtn} onClick={saveTweet}>Save</h3>}
            {isArchieve && <h3 className={styles.archieve}>Archieved</h3>}
            <h3 className={styles.status}>{status ? "Public" : "Private"}</h3>
        </div>
    )
}

