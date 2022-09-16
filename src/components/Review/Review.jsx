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
    
    const handleSubmit = () => {
        axios({
            type: 'POST',
            url: '/',
            data: {
                feeling,
                understanding,
                support,
                comments,
            }
        }).then((response) => {
            dispatch({type: 'CLEAR_ALL'});
            history.push('/')
        }).catch((error) => {
            console.log(error);
            alert('Something went wrong')
        })  
    }

    return (
        <>
        <div>
            <ul>
                <li>Feelings{feeling}</li>
                <li>Understanding{understanding}</li>
                <li>Support{support}</li>
                <li>Comments{comments}</li>
            </ul>
            <button onClick={() => {history.push('/page/five');handleSubmit();}}>Submit</button>
        </div>
        </>
    )
}

export default Review

// onClick={handleSubmit}