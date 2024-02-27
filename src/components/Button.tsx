
export const Button = (props: any) => {
    const { title, bg = "bg-fisrt", hover = "rounded-sm", onClick } = props
    return (
        <div>
            <div className="flex justify-center py-5">
                <button onClick={onClick} className={`${bg}  py-1 px-6 font-bold ${hover}`}>{title}</button>
            </div>
        </div>
    )
}
