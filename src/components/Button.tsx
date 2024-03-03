
export const Button = (props: any) => {
    const { title, bg = "bg-fisrt", hover = "rounded-sm", onClick, type = "button" } = props
    return (
        <div>
            <div className="my-5">
                <button onClick={onClick} type={type} className={`${bg} py-1 px-6 font-bold ${hover}`}>{title}</button>
            </div>
        </div>
    )
}
