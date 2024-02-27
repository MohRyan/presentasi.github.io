
const noPaslon = [
    {
        no: "3",
        name: "CINTARA SURYA PALOH",
        vote: "78%",
        bg: "bg-[#FF6384]",
        bgNo: "bg-[#5E0000]",
        text: "text-[#5E0000]"
    },
    {
        no: "1",
        name: "SURYA SURYA",
        vote: "45%",
        bg: "bg-[#FFCD56]",
        bgNo: "bg-[#5E5400]",
        text: "text-[#5E5400]"
    },
    {
        no: "2",
        name: "CINTARA",
        vote: "25%",
        bg: "bg-[#36A2EB]",
        bgNo: "bg-[#005E4D]",
        text: "text-[#005E4D]"
    },
]


export const NoPaslon = () => {
    return (
        <div>
            {
                noPaslon.map(item => (
                    <div className={`w-[657px] h-[166px] flex items-center p-5 rounded-lg mb-5 ${item.bg}`}>
                        <div>
                            <div className={`w-[80px] h-[112px] flex p-5 items-center rounded-md ring-1 ring-white ${item.bgNo}`}>
                                <p className="text-center text-white">No. Paslon <span className="text-3xl font-bold">{item.no}</span></p>
                            </div>
                        </div>
                        <div className={`p-10 ${item.text} font-bold text-5xl stroke`}>
                            <p>{item.name}</p>
                            <p>{item.vote}</p>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}
