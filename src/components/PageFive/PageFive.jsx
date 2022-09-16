import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const PageFive = () => {
    const history = useHistory();
    return(
        <>
        <h3>Success!</h3>
        <button onClick={() => history.push('/')} className="button">Submit more feedback?</button>
        </>
    )
}

export default PageFive