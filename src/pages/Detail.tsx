import { Navbar } from "../components/Navbar"
import { Link } from "react-router-dom"

export const Detail = () => {
    return (
        <div>
            <Navbar />
            <div className="w-screen h-screen bg-page flex justify-center">
                <div className="w-[1440px] bg-white">
                    <div className="">
                        <Link to="/"><p>Beranda</p></Link>
                        <p>Berita Hari ini</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
