import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

const PageThree = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const support = useSelector(store => store.support)

    const handleChange = (event) => {
        dispatch({type: 'SET_SUPPORT', payload: event.target.value})
    }


    return (
        <>
        <h3>How well are you feeling supported?</h3>
        <input value={support} onChange={handleChange} className="input" type='text' />
        <button onClick={() => history.push('/page/four')} className="button">Next</button>
        </>
    );
}

export default PageThree;