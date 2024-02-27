import { Link } from "react-router-dom"
import sampleFoto from "../assets/images/sampleFoto.png"
import { Button } from "./Button"
import article from "../Json/article.json"


export const Article = () => {
    return (
        <div className="py-10 w-[1141px]">
            {article.map((item) => (
                <div className="grid w-full grid-cols-3 gap-3">
                    <Link to={`/detail${item.id}`} className="relative z-0 col-span-2 ">
                        <img src={sampleFoto} className="object-cover " alt="" />
                        <div className="bg-gradient-to-t from-black absolute z-10 w-[753px] h-[421px] bottom-9"></div>
                        <div className="ps-5">
                            <Button hover={"hover:bg-white hover:text-second w-[240px]"} bg={"bg-second text-white rounded-sm absolute bottom-32 left-5 z-20"} title={item.tanggal} />
                        </div>
                        <p className="absolute z-20 text-2xl font-bold text-white bottom-20 ps-5">{item.title}</p>
                        <p className="absolute z-20 text-2xl text-white bottom-14 ps-5">{item.admin}</p>
                    </Link>
                    {item.sub.map(sub => (
                        <Link to={`/detail${sub.id}`} className="h-[421px] bg-white">
                            <img src={sampleFoto} alt="" className="" />
                            <div className="mt-5 ps-5">
                                <Button hover={"hover:bg-white hover:text-second hover:shadow hover:ring hover:ring-black"} bg={"w-[250px] bg-second text-white rounded-sm my-1 mr-32"} title={sub.tanggal} />
                                <p className="text-2xl font-bold">{sub.title}</p>
                                <p className="text-xl ">{sub.admin}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            ))}



        </div>
    )
}
