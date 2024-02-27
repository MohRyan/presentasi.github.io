import paslon from "../../assets/images/paslon.png"
import dataPaslon from "../../Json/paslon.json"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// Visi & Misi :
// Memindahkan Indonesia ke Isekai.
// Nonton anime 3x sehari.
// Melakukan peresapan pada budaya jepang.

// Koalisi :
// Partai Persatuan Wiboo.
// Partai Redbull.
// Partai Black Magic.


export const Paslon = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <div className="flex flex-col items-center justify-center w-screen py-20 bg-slate-300">
            <b className="py-10 text-3xl text-fisrt">INFO PASLON</b>
            <div className="flex py-20 ">

                {dataPaslon.map((item) => (
                    <div className="flex px-20 py-10 bg-white shadow-2xl rounded-2xl">
                        <div className="pe-5">
                            <img src={paslon} alt="" />
                        </div>
                        <div>
                            <b>Nomor Urut {item.no}</b>
                            <p className={`${item.text} text-2xl font-bold`}>{item.name}</p>
                            <div>
                                <p className="mb-2">Visi & Misi :</p>
                                {
                                    item.vimi.map(vimi => (
                                        <ul>
                                            <li><b>*</b> {vimi.title}</li>
                                        </ul>
                                    ))
                                }
                                <p className="mb-2">Koalisi :</p>
                                {
                                    item.koalisi.map(koalisi => (
                                        <ul>
                                            <li><b>*</b> {koalisi.partai}</li>
                                        </ul>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                ))}
                {/* <Carousel responsive={responsive}>
                </Carousel> */}
            </div>
        </div>
    )
}
