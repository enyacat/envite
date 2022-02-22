import './Create.css'
import { Link } from 'react-router-dom'

const Create = () => {
    return (
        <div className='create'>
            <h2>Add an event</h2>
            <div className='next-btn'><Link className="create-btn" to="/event">Next</Link></div>
        </div>
    );
}

export default Create;