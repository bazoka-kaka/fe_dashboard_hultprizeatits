import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function ImageSlider() {
    const settings = {
        dots: false,
        infinite: true,
        time: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '-8',
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1196,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerPadding: '100'
                }
            },
            {
                breakpoint: 870,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerPadding: '50'
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '-8'
                }
            }
        ]
    }
    return (
        <Slider className='z-50 px-3' {...settings}>
            <div className="z-20 card-container">
                <div className='flex flex-col justify-between px-4 py-4 rounded-lg' style={{width: '250px', height: '370px', background: 'linear-gradient(30.41deg, #C11873 0%, #EC83BD 100%)'}}>
                    <h1 className='text-3xl font-semibold'>OO - OO<br />September</h1>
                    <h1 className='text-lg font-semibold text-right'>Preliminary <br/><span className='text-3xl'>Abstract Submission</span></h1>
                </div>
            </div>
            <div className="card-container">
                <div className='px-1 py-1 rounded-lg' style={{width: '250px', height: '370px', background: 'linear-gradient(30.41deg, #C11873 0%, #EC83BD 100%)'}}>
                    <div className='flex flex-col justify-between w-full h-full px-4 py-4 rounded-lg' style={{background: 'black'}}>
                        <h1 className='text-3xl font-semibold text-white'>OO - OO<br />October</h1>
                        <h1 className='text-lg font-semibold text-right text-white'>Semi-final<br/><span className='text-3xl'>Video Pitching <br />Presentation</span></h1>
                    </div>
                </div>
            </div>
            <div className="card-container">
                <div className='px-1 py-1 rounded-lg' style={{width: '250px', height: '370px', background: 'linear-gradient(30.41deg, #C11873 0%, #EC83BD 100%)'}}>
                    <div className='flex flex-col justify-between w-full h-full px-4 py-4 rounded-lg' style={{background: 'black'}}>
                        <h1 className='text-3xl font-semibold text-white'>OO - OO<br />November</h1>
                        <h1 className='text-lg font-semibold text-right text-white'>Road to Final<br/><span className='text-3xl'>Incubation Program</span></h1>
                    </div>
                </div>
            </div>
            <div className="card-container">
                <div className='px-1 py-1 rounded-lg' style={{width: '250px', height: '370px', background: 'linear-gradient(30.41deg, #C11873 0%, #EC83BD 100%)'}}>
                    <div className='flex flex-col justify-between w-full h-full px-4 py-4 rounded-lg' style={{background: 'black'}}>
                        <h1 className='text-3xl font-semibold text-white'>4 December</h1>
                        <h1 className='text-lg font-semibold text-right text-white'>Final<br/><span className='text-3xl'>Award<br/>Ceremony<br />&Gala</span></h1>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default ImageSlider
