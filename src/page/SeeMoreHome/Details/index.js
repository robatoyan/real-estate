import { useContext, useEffect, useState } from 'react';
import './style.css';
import { MyContex } from '../../../component/MyContext';
import { useParams } from 'react-router-dom';

export const Details = () => {
    const { arr, setArr } = useContext(MyContex)
    const params = useParams()
    const [str, setStr] = useState({})
    useEffect(() => {
        setStr(arr.find((e) => e.id == params.id))
    }, [])
    return (
        <div className='Details'>
            <h2>Details</h2>
            <ul>
                <li><i className="fa fa-bed" aria-hidden="true"></i>{str.bedroom}</li>
                <li><i className="fa fa-bath" aria-hidden="true"></i>{str.bathroom}</li>
                <li><i className="fa fa-windows" aria-hidden="true"></i>{str.window}</li>
            </ul>
        </div>
    )
}