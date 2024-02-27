
export const Input = (props: any) => {
    const { title, placeHolder, type } = props
    return (
        <div>
            <p className="mb-1 text-lg font-bold">{title}</p>
            <input className="w-full py-2 mb-5 rounded-sm ring ring-black ps-2" type={type} placeholder={placeHolder} />
        </div>
    )
}
