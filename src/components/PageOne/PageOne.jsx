import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

const PageOne = () => {
    const history = useHistory();
    const feeling = useSelector(store => store.feeling)
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch({type: 'SET_FEELING', payload: event.target.value})
    }
    return (
        <>
        <div>
            <h3>How are you feeling today?</h3>
            <input value={feeling} onChange={handleChange}className='input' type='text' />
            <button onClick={() => history.push('/page/two')} className='button'>Next</button>
        </div>
        </>
    );
}

export default PageOne