import './Create.css'
import { Link } from 'react-router-dom'

const Create = () => {
    return (
        <div className='create'>
            <h2>Add an event</h2>
            <div className='next-btn'
                style={{
                    '--color-1': 'deepskyblue',
                    '--color-2': 'navy',
                    background: `
                      linear-gradient(
                        170deg,
                        var(--color-1),
                        var(--color-2) 80%
                      )
                    `}}
            ><div className="next-btn-icon" style={{
                backgroundImage: `url("/images/send.svg")`
            }}></div><Link to="/event">Next</Link></div>
        </div>
    );
}

export default Create;