import { Navbar } from '../../components/Navbar'
import { Input } from '../../components/elements/input'
import { Button } from '../../components/Button'
import paslon from "../../assets/images/paslon.png"
import { TextArea } from '../../components/TextArea'


export const AddPartai = () => {
    return (
        <div>
            <Navbar admin={""} />
            <div className='flex flex-col items-center justify-center'>
                <b className='py-20 text-4xl text-fisrt'>ADD PARTAI</b>
                <div className='flex w-[1440px] justify-center items-center'>
                    <div className='mb-7'><img src={paslon} alt="" /></div>
                    <div className='w-2/3 ps-12'>
                        <Input title="Nama" />
                        <Input title="Nomor Urut" />
                        <TextArea title="Visi Misi" style="h-32" />
                        <Button title="SUBMIT" hover="text-white px-48 rounded-lg hover:opacity-50" />
                    </div>
                </div>
            </div>
        </div>
    )
}
