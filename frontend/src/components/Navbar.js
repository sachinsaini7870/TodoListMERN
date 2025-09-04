import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

const Navbar = () => {

    return (
        <header>
            <div className="nav-container">
                <Link to="/">
                    <h1>To-Do List</h1>
                </Link>
                <SearchBar />

            </div>
        </header>
    )
}

export default Navbar