import './style.css';
import { Link, useLocation } from 'react-router-dom';

export const Menu = () => {
    const location = useLocation()
    return (
        <div>
            {
                location.pathname == "/" ?
                    <div className='Menu'>
                        <div className='HomeMenu'>
                            <i className="fa fa-home homeLogo" aria-hidden="true"></i>
                            <ul>
                                <li>Nav Link</li>
                                <li>Nav Link</li>
                                <li>Nav Link</li>
                                <li>Nav Link</li>
                            </ul>
                            <button>Work with us <i className="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                        </div>
                    </div>
                    :
                    <div className='SeeMoreMenu'>
                        <div className='HomeMenu1'>
                            <i className="fa fa-home homeLogo" aria-hidden="true"></i>
                            <ul>
                                <li>Nav Link</li>
                                <li>Nav Link</li>
                                <li>Nav Link</li>
                                <li>Nav Link</li>
                            </ul>
                            <Link to="/"><button>Work with us <i className="fa fa-long-arrow-right" aria-hidden="true"></i></button></Link>
                        </div>
                    </div>
            }
        </div>
    )
}