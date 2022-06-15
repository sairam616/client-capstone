import './Management.css';
import Navigation from './Navigation/Navigation';
import Home from './Home/Home';

function Management() {
    return (
        <>

            <Navigation
            />

            <div className='main'
            >
                <Home />
            </div>
        </>
    );
}

export default Management;
