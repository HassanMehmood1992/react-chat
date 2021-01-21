import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import {logout} from './../store/user';
import {useHistory, useParams} from "react-router-dom";

const DashBoardPage = () => {
    const {user} = useSelector(state => state.user)
    const dispatch = useDispatch()
    const history = useHistory()
    const params = useParams()
    const handleLogout = () => {
        alert('loug')
        dispatch(logout())
        history.push('/login')
    }
    const handleParams = () => {
        history.replace('/login')
    }
    return <div>
        Dashboard Page content : current user : {user ? user.username : ''}
        params: {JSON.stringify(params)}
        <div>
            <Link onClick={handleLogout}>logout</Link>
        </div>
        <div>
            <button onClick={handleParams}></button>
        </div>
    </div>;
};
export default DashBoardPage;
