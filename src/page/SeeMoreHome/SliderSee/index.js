import './style.css';
import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MyContex } from '../../../component/MyContext';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
export const SliderSee = () => {
    const { arr, setArr } = useContext(MyContex)
    return (
        <div className="SliderSee">
            <div className='sliderSee-Line'></div>
            <h1>Similar listings</h1>
            <Swiper
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    400: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    768: {
                        slidesPerView: 3,
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
                className="mySwipers"

            >
                {
                    arr.map((e) => {
                        return (
 
                            <SwiperSlide className='Home' key={e.id}>
                                    <img src={e.img} />
                                    <h2>{e.title}</h2>
                                    <ul>
                                        <li><i className="fa fa-bed" aria-hidden="true"></i>{e.bedroom}</li>
                                        <li><i className="fa fa-bath" aria-hidden="true"></i>{e.bathroom}</li>
                                        <li><i className="fa fa-windows" aria-hidden="true"></i>{e.window}</li>
                                    </ul>
                                    <a href={"/See/"+e.id}><button>Home</button></a>
                            </SwiperSlide>

                        )
                    })
                }

            </Swiper>
        </div>
    )
}