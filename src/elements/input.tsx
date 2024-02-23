
export const Input = (props: any) => {
    const { title, placeHolder, type } = props
    return (
        <div>
            <p className="mb-2">{title}</p>
            <input className="ring ring-black mb-5 py-2 ps-2 rounded-sm w-full" type={type} placeholder={placeHolder} />
        </div>
    )
}
