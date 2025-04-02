import Image from "next/image";
import people from '../../../public/Images/people.png';


const Credibility = () => {
    return (
        <div className="flex items-center justify-center text-center gap-5 py-10">
            <Image src={people} height={80} width={80} alt="people" className="cursor-pointer" />
            <p className="opacity-40 font-semibold">Trusted by 3000+ People Globally</p>
        </div>
    );
}

export default Credibility;