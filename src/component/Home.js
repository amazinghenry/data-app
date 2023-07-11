import { Link } from 'react-router-dom';

const HomePage = () => {
    return ( 
        <div className="App">
            <h1>Welcome to Home page</h1>
            <Link to = '/students'>See Students</Link>
        </div>
     );
}
 
export default HomePage;