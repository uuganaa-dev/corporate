/* eslint-disable react-hooks/exhaustive-deps */
import { Element } from "react-scroll";
import { useParams } from 'react-router-dom'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";

const data = [
    {
        title: 'BAR & RESTAURANTS',
        description: `The Resturant is the Colina Resort's iconic dining venue,
        serving breakfast, afternoon tea and an evening service
        complimented by the recent addition of a bar and craft
        cocktail program.
        `,
        image: '/img/service/111.png'
    },
    {
        title: 'SPA & SALON',
        description: `The Resturant is the Colina Resort's iconic dining venue,
        serving breakfast, afternoon tea and an evening service
        complimented by the recent addition of a bar and craft
        cocktail program.
        `,
        image: '/img/service/222.png'
    },
    {
        title: 'SWIMMING POOL',
        description: `The Resturant is the Colina Resort's iconic dining venue,
        serving breakfast, afternoon tea and an evening service
        complimented by the recent addition of a bar and craft
        cocktail program.
        `,
        image: '/img/service/333.png'
    },
    {
        title: 'WEDDING EVENT',
        description: `The Resturant is the Colina Resort's iconic dining venue,
        serving breakfast, afternoon tea and an evening service
        complimented by the recent addition of a bar and craft
        cocktail program.
        `,
        image: '/img/service/444.png'
    },

]
export default function RoomDetail() {
    const { id } = useParams()
    const [facility, setFacility] = useState(data[0])

    useEffect(() => {
        setFacility(data[id] || data[0])
    }, [])

    return (
        <div>
            <Element name="detail" className="element">
                <div>
                    <div className="w-full h-[107px] bg-[#00000080] opacity-50"></div>
                    <div className="relative shadow">
                        <div className="w-full h-full md:h-[85vh] relative">
                            <img
                                src={facility.image}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                            <div className="h-[155px] w-full absolute bottom-0 bg-[#0D294499] p-8 text-white">
                                <div className="text-[30px] text-[#FFE3AB]">
                                    {facility.title}
                                </div>
                                <div>
                                    {facility.description}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Element>
        </div>
    );
}
