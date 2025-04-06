import Image from "next/image";
import phone from '../../../public/Images/demo.png'
import demoleft from '../../../public/Images/demoleft.png'
import demoright from '../../../public/Images/demoright.png'

const Demo = () => {
    return (
        < div className="flex flex-col items-center pt-20 pb-28">
            <div className="mt-24 mb-10 opacity-40">
                <p className="text-[0.5rem] md:text-xs border border-gray-400 w-fit rounded-full px-4 py-2 text-center">SEE APP DEMO</p>
            </div>

            <div className="leading-loose text-center mb-10">
                <p className="text-2xl md:text-4xl pb-4 opacity-80 font-medium">See Flame in Action</p>
                <p className="opacity-60 tracking-wider text-sm md:text-[16px]">all while maintaining control over their data through zk-SNARKs encryption.</p>
            </div>

            <div  className="flex justify-between gap-20">
                <Image src={demoleft} width={400} height={600} alt="demo" className="hidden md:block"/>
                <Image src={phone} width={400} height={600} alt="demo"/>
                <Image src={demoright} width={400} height={600} alt="demo" className="hidden md:block"/>
            </div>
        </ div>
    );
}

export default Demo;