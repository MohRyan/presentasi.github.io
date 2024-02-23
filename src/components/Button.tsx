
export const Button = (props: any) => {
    const { title, bg = "bg-fisrt", hover } = props
    return (
        <div className="flex justify-center py-5">
            <button className={`${bg} rounded-sm py-1 px-6 w-full font-bold ${hover}`}>{title}</button>
        </div>
    )
}
