import Image from "next/image";
import purple from '../../../public/Images/purple.png'
import orange from '../../../public/Images/orange.png'
import green from '../../../public/Images/green.png'

const Community = () => {
    return (
        <div className="pb-20">
            <div className="mt-24 mb-16 opacity-40 flex justify-center">
                <p className="text-xs border border-gray-400 w-fit rounded-full px-4 py-2 text-center">COMMUNITY & ECOSYSTEM</p>
            </div>

            <p className="text-center text-3xl">Join a Thriving Community</p>
            <p className="opacity-60 tracking-wider text-center mt-4 mb-16">all while maintaining control over their data through zk-SNARKs encryption.</p>

            <div className="flex flex-col md:flex-row justify-between gap-8 px-[5%]">
                <div className="bg-[#f1ebff] rounded-3xl px-24 py-8">
                    <Image src={purple} width={650} height={650} alt="participation" className="mb-10" />
                    <p className="text-lg w-full md:max-w-[35%] mb-4 font-semibold md:text-3xl text-[#6E3AFF]">Tired Particpation</p>
                    <p className="text-md w-full md:max-w-[55%] tracking-wider opacity-60">Earn your place in the Flame community with contributions.</p>
                </div>
                <div className="bg-[#feefe7] rounded-3xl px-24 py-8">
                    <Image src={orange} width={650} height={650} alt="participation" className="mb-10" />
                    <p className="w-full md:max-w-[45%] mb-4 font-semibold text-lg md:text-3xl text-[#F6610D]">Merit-Based Advancements</p>
                    <p className="text-md w-full md:max-w-[55%] tracking-wider opacity-60">Level up from lurker to contributor to elite member.</p>
                </div>
                <div className="bg-[#ecf8f0] rounded-3xl px-24 py-8">
                    <Image src={green} width={650} height={650} alt="participation" className="mb-10" />
                    <p className="text-lg w-full md:max-w-[35%] mb-4 font-semibold md:text-3xl text-[#40B66B]">DAO Governance</p>
                    <p className="text-md w-full md:max-w-[55%] tracking-wider opacity-60">Shape the future of Flame through community voting.</p>
                </div>
            </div>
        </div>
    );
}

export default Community;