import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

const PageOne = () => {
    const history = useHistory();
    const feeling = useSelector(store => store.feeling)
    const dispatch = useDispatch();
    return (
        <>
        </>
    );
}

export default PageOne