import { useContext } from 'react';
import './style.css';
import { MyContex } from '../../../component/MyContext';
import { Link } from 'react-router-dom';

export const MaltoHouse = () => {
    const { arr, setArr } = useContext(MyContex)
    return (
        <div className="MaltoHouse" >
            <div className='Chelected'>
                <div className='lineHous'></div>
                <h2>Find your next place to live</h2>
            </div>
            <div className='Houses'>
                {
                    arr.map((e) => {
                        return (
                            <div className='Home' key={e.id}>
                                <Link to={"/See/" + e.id} > <img src={e.img} /></Link>
                                <h2>{e.title}</h2>
                                <ul>
                                    <li><i className="fa fa-bed" aria-hidden="true"></i>{e.bedroom}</li>
                                    <li><i className="fa fa-bath" aria-hidden="true"></i>{e.bathroom}</li>
                                    <li><i className="fa fa-windows" aria-hidden="true"></i>{e.window}</li>
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}