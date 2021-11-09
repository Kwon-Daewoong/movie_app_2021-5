import { Link } from 'react-router-dom'
import './Navigation.css';
function Navigation() {
    return (
        <div className='nav'>
            <Link to="/">home</Link>
            <Link to="/About">About</Link>
        </div>
    )
}
export default Navigation