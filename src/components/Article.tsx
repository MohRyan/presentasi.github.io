import { Hero } from "./Hero"
import { HeroSub } from "./HeroSub"
import { Link } from "react-router-dom"


export const Article = () => {
    return (
        <div className="py-10 w-[1141px]">
            <div className="grid grid-cols-3 w-full gap-3">
                <div className="col-span-2 relative z-0 ">
                    <Link to="/detail"><Hero /></Link>
                </div>
                <HeroSub />
                <HeroSub />
                <HeroSub />
                <HeroSub />

            </div>
        </div>
    )
}
