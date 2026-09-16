import { Link } from "react-router-dom"

function Header(){
    return (
        <header>
            <h1>Task Tracker</h1>
            <h2>Manage your tasks easily</h2>
            <Link to="/tasks/create">Create Task</Link>
        </header>
    )
}
export default Header