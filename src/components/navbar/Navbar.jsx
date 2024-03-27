import './navbar.scss'
import cn from 'clsx'

const Navbar = () => {
    return (
        <nav className={cn('nav', 'light-background')}>
            <div className='wrapper'>
                <div className='sidebar'>
                    <a href="#top">Home</a>                
                </div>
                <div className='logo'> JULIA°LΔB </div>
            <ul className='nav-social-links'>
                <li><a href="#top">Home</a></li>
                <li><a href="#top">Section cases with +/-</a></li>
                <li><a href="#top">Contact</a></li>
            </ul>

            </div>
            
        </nav>
    )
}

export default Navbar