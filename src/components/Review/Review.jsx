import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


const Review = () => {
    const feeling = useSelector(store => store.feeling)
    const understanding = useSelector(store => store.understanding)
    const support = useSelector(store => store.support)
    const comments = useSelector(store => store.comments)
    const history = useHistory();
    const dispatch = useDispatch();
    


    const handleReview = () => {
        axios({
            // method not type
            method: 'POST',
            url: '/feedback',
            data: {
                feeling: feeling,
                understanding: understanding,
                support: support,
                comments: comments,
            }
        }).then((response) => {
            dispatch({type: 'CLEAR_ALL'});
            history.push('/page/five')
        }).catch((error) => {
            console.log(error);
            alert('Something went wrong')
        })  
    }

    return (
        <>
        <div>
            <ul>
                <li>Feelings: {feeling}</li>
                <li>Understanding: {understanding}</li>
                <li>Support: {support}</li>
                <li>Comments: {comments}</li>
            </ul>
            <button onClick={handleReview}>Submit</button>
        </div>
        </>
    )
}

export default Review

// onClick={handleSubmit}