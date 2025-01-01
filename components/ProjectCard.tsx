import { barlow } from "@/fonts";
import { IoArrowForward } from "react-icons/io5";


interface ProjectCardProps {
    url: string;
    name: string;
    description: string;
    date: string;
}

export const ProjectCard = ({ url, name, description, date }: ProjectCardProps) => {
    return (
        <div className="hover:bg-[#171717] p-4 rounded-lg max-w-[600px] transition-all duration-200 cursor-pointer group">
            <a href={url} className="space-y-6">
                <div className="space-y-2">
                    <div className="flex justify-between w-full">
                        <p className="font-bold text-3xl">{name}</p>
                        <div className="group-hover:block hidden -rotate-45">
                            <IoArrowForward size={24} color="#AD2903" />
                        </div>
                    </div>
                    <p className={`${barlow.className} text-[#6f7074]`}>{description}</p>
                </div>
                <p className={`${barlow.className} text-[#6f7074]`}>{date}</p>
            </a>
        </div>
    );
}