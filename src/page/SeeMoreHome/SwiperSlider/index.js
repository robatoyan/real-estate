import { useContext, useEffect, useState } from 'react';
import './style.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useParams } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { MyContex } from '../../../component/MyContext';
export const SwiperSlider = () => {
    const { arr, setArr } = useContext(MyContex)
    const params = useParams()
    const [str, setStr] = useState({})
    useEffect(() => {
        setStr(arr.find((e) => e.id == params.id))
    }, [])
    const [index, setIndex] = useState(0)
    return (
        <div className='SwiperSlider'>
            <div className='mySwiper'>
                <div className='ChekImg'>
                    {
                        str && str.imges && <img src={str.imges[index]} />
                    }
                </div>
                <Swiper
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        },
                        480: {
                            slidesPerView: 3,
                            spaceBetween: 10
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 15
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 15
                        },
                        1280: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        }

                    }}
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    modules={[FreeMode]}
                    className="mySwipersChk"

                >
                    <div className='imgCheked'>
                        {
                            str.imges && str.imges.map((e, i) => {
                                return (
                                    <SwiperSlide className='Home' key={i} onClick={() => setIndex(i)}>
                                        <img src={e} />
                                    </SwiperSlide>

                                )
                            })
                        }
                    </div>
                </Swiper>
            </div>
            <div className='Date'>
                <div className='DateImg'>
                    <img src='/img/imgUser.png' />
                    <div>
                        <h2>Kayley Hall</h2>
                        <h3>View profile</h3>
                    </div>
                </div>
                <form>
                    <input placeholder='Name' />
                    <input placeholder='Phone' />
                    <input placeholder='Email' />
                    <textarea />
                    <button>Learn more <i className="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                </form>
            </div>
        </div >
    )
}