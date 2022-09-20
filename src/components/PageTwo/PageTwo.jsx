import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

const PageTwo = () => {
    const history = useHistory();
    const understanding = useSelector(store => store.understanding)
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch({type: 'SET_UNDERSTANDING', payload: event.target.value})
    }

    return (
        <>
        <div>
        <h3> How well are you understanding the content?</h3>
        <input value={understanding} onChange={handleChange} className="input" type="number" required />
        {/* Validation goes here */}
        <button onClick={() => history.push('/page/three')} className="button">Next</button>
        </div>
        </>
    );
}

export default PageTwo;