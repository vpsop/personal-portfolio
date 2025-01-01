import { barlow } from "@/fonts";
import { IconType } from "react-icons";

interface ConnectCardProps {
    Icon: IconType;
    url: string;
    platform: string;
    handle: string
}

export const ConnectCard = ({Icon, platform, handle, url} : ConnectCardProps) => {
    return (
        <a href={url} className="flex items-center gap-4 hover:bg-[#171717] pr-20 pl-0 rounded-md max-w-fit transition-all duration-200 cursor-pointer">
            <div className="flex justify-center items-center bg-white m-4 p-3 rounded-md aspect-square">
            <Icon color="#AD2903" size={30}/>
            </div>

            <div>
                <p className="font-bold text-3xl">{platform}</p>
                <p className={`${barlow.className} text-[#6f7074]`}>{handle}</p>
            </div>
        </a>
    );
}