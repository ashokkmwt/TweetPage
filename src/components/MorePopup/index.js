import React, { useEffect, useRef } from 'react'
import styles from './index.module.css';
import { useDispatch } from 'react-redux';
import { removeTweetAction, statusUpdateAction } from '../../redux/actions/tweetActions';

export default function MorePopup(props) {


    const { showOptions, id, updateTweet, status, isArchieve, setArchieve } = props;

    const dispatch = useDispatch();
    const removeTweet = () => dispatch(removeTweetAction(id));

    const updateStatus = () => {
        dispatch(statusUpdateAction(id))
        showOptions();
    }

    // adding propagation on popup
    const ref = useRef();

    useEffect(() => {

        const checkIfClickedOutside = (e) => {
            // checking if user has clicked outside the div
            if (ref.current && !ref.current.contains(e.target)) {
                showOptions();
            }
        };


        document.addEventListener("mousedown", checkIfClickedOutside);

        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside);
        };

    }, [showOptions]);

    return (
        <div className={styles.morePopup} ref={ref}>
            <h5 onClick={removeTweet}>Delete</h5>
            <h5 onClick={updateTweet}>Edit</h5>
            <h5 onClick={updateStatus}>{status ? "Make Private" : "Make Public"}</h5>
            <h5 onClick={setArchieve}>{isArchieve ? "Un Archieve" : "Archieve"}</h5>
        </div>
    )
}
