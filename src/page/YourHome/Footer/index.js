import './style.css';


export const Footer = () => {
    return (
        <div className='Footer'>
            <div className='dreams'>
                <h2>Make your dreams a <span>reality</span></h2>
                <button>Work with us<i className="fa fa-long-arrow-right" aria-hidden="true"></i></button>
            </div>
            <div className='Column_Heading'>
                <div className='icons'>
                    <i className="fa fa-home homeLogo" aria-hidden="true"></i>
                    <div>
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                    </div>
                </div>
                <div className='Links'>
                    <ul className='titles'>
                        <li>Column Heading</li>
                        <li>Link goes here</li>
                        <li>Link goes here</li>
                        <li>Link goes here</li>
                        <li>Link goes here</li>
                    </ul>
                    <ul className='titles'>
                        <li>Column Heading</li>
                        <li>Link goes here</li>
                        <li>Link goes here</li>
                        <li>Link goes here</li>
                        <li>Link goes here</li>
                    </ul>
                    <ul className='titles'>
                        <li>Column Heading</li>
                        <li>Link goes here</li>
                        <li>Link goes here</li>
                        <li>Link goes here</li>
                        <li>Link goes here</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}