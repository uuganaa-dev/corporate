/* eslint-disable react-hooks/exhaustive-deps */
import { Element } from "react-scroll";
import { useParams } from 'react-router-dom'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";

const data = [
    {
        title: 'Lux Room',
        description: `Өвөрмөц шийдэл бүхий тохижилттой Таньд хэрэгтэй бүх үйлчилгээ нэг дор Ажлынхаа чөлөөт цагаар фитнессээр хичээллэж, усанд сэлж, амттай хоолоо захиалах боломжтой. Энгийн , минималист орчин бүхий тав тухтай орчныг ажлын байрандаа бий болгохоор зорьж тохижуулсан оффис , өвөрмөц өнгө төрх нь уламжлалт хэв маягийг өөрчилж чадсан.Ажлын байрандаа олон төрлийн арга хэмжээ зохион байгуулах,хамтран ажиллах түншүүдтэйгээ уулзах тав тухтай өрөөг олон шийдлээр тохижуулснаар үр бүтээмжтэй ажиллах нөхцөлийг бүрдүүлсэн. Цаг үе үргэлж өөрчлөлтөд бэлэн байж, чөлөөтэй сэтгэж, хурдтай ажиллахыг бидэнд сануулсаар байна. Хэн нэгэндээ саад болохгүй ч хамтран шийдвэр гаргах, зөвлөлдөх боломж, орчинг бүрдүүлсэн шийдэл бүхий тохижилттой. Та бүхнийг урьж байна..
        `,

        price: '500,000₮',
        type: 'Single room',
        size: 25,
        images: [
            {
                title: 'zurag-1',
                url: '/img/room/room1.png'
            },
            {
                title: 'zurag-1',
                url: '/img/room/room2.png'
            },
            {
                title: 'zurag-1',
                url: '/img/room/room3.png'
            },
        ]
    }
]
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export default function RoomDetail() {
    const { id } = useParams()
    const [room, setRoom] = useState(data[0])

    useEffect(() => {
        setRoom(data[id] || data[0])
    }, [])

    return (
        <div>
            <Element name="detail" className="element">
                <div>
                    <div className="w-full h-[107px] bg-[#00000080] opacity-50"></div>
                    <div className="md:h-[75vh] w-full">
                        <Carousel responsive={responsive} className="h-full">
                            {room.images.map((img, index) => (
                                <div className="h-full" key={`zurag-${index}`}>
                                    <img
                                        src={img.url}
                                        alt=""
                                        className="w-full h-full object-cover "
                                    />
                                </div>
                            ))}

                        </Carousel>
                    </div>

                    <div className="px-5 md:px-10 my-5">

                        <div className="flex">
                            <div className="pr-5">
                                <div className="w-full grid grid-cols-3 md:grid-cols-8 my-5 gap-5">
                                    {room.images.map((img, index) => (
                                        <div className="h-32" key={`zurag-${index}`}>
                                            <img
                                                src={img.url}
                                                alt=""
                                                className="w-full h-full object-cover hover:opacity-60"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="text-[#B58E3E] text-[25px] uppercase">{room.title}</div>
                                <div className="text-gray-600 text-sm">{room.type}</div>

                                <div className="mt-5">{room.description}</div>
                            </div>
                            <div className="pl-5 border-black border-l">
                                <div className="w-32 md:w-96">
                                    <div className="text-gray-600">
                                        <span className="font-semibold italic font-[roboto] text-gray-900">
                                            {room.price}
                                        </span>
                                        / per night <br /> 1-2 guest 25м2
                                    </div>
                                    <div>
                                        ROOM RATE INCLUDES:
                                        <ul>
                                            <li>
                                                WIFI
                                            </li>
                                            <li>
                                                HEALTH CLUB
                                            </li>
                                            <li>
                                                BREAKFAST BUFEET
                                            </li>
                                            <li>
                                                VAT 10%
                                            </li>
                                        </ul>
                                        AIRPORT PICK UP&amp;DROP OFF SERVICE DEPENDING ON AVAILABILITY
                                        <ul>
                                            <li>
                                                STANDARD KING 27
                                            </li>
                                            <li>
                                                STANDARD TWIN 14
                                            </li>
                                            <li>
                                                APARTMENT TWIN 3
                                            </li>
                                            <li>
                                                APARTMENT KING 7
                                            </li>
                                            <li>
                                                DELUXE SUITE 3
                                            </li>
                                            <li>
                                                PENTHOUSE 1
                                            </li>
                                            <li>
                                                PREMIUM SUITE
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Element>
        </div>
    );
}
