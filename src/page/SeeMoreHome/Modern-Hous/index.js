import { useContext, useEffect, useState } from 'react';
import './style.css';
import { MyContex } from '../../../component/MyContext';
import { useParams } from 'react-router-dom';

export const ModernHous = () => {
    const { arr, setArr } = useContext(MyContex)
    const params = useParams()
    const [str, setStr] = useState({})
    useEffect(() => {
        setStr(arr.find((e) => e.id == params.id))
    }, [])
    return (
        <div className='ModernHous'>
            <div className='Modern'>
                <div>
                    <h2>{str.title}</h2>
                    <h3>3002 Foster Ave, Brooklyn, NY 11210, USA</h3>
                </div>
                <h4>${str.price}</h4>
            </div>
        </div>
    )
}