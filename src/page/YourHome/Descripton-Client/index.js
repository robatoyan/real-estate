import { useContext } from 'react';
import './style.css';
import { MyContex } from '../../../component/MyContext';

export const DescriptonClient = () => {
    const { client, setClient } = useContext(MyContex)
    return (
        <div className='DescriptonClient'>
            <div className='clientLine'></div>
            <p className='cleint-text'>
                “Certe, inquam, pertinax non<br />
                existimant oportere exquisitis<br />
                rationibus conquisitis de quo<br />
                enim ipsam. Torquem detraxit<br />
                hosti et quidem faciunt,<br />
                ut aut.”
            </p>
            <div className='clientes'>
                {
                    client.map((e) => {
                        return (
                            <div key={e.id} className='client'>
                                <img src={e.img} />
                                <div>
                                    <h2>{e.nameSurname}</h2>
                                    <p>{e.client}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}