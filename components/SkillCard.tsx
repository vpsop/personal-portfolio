import { barlow } from "@/fonts";

interface SkillCardProps {
    logoURL: string;
    skillName: string;
    skillType: string
}

export const SkillCard = ({logoURL, skillName, skillType} : SkillCardProps) => {
    return (
        <div className="flex items-center gap-4 hover:bg-[#171717] rounded-lg transition-all duration-200 cursor-pointer">
            <div className="flex justify-center items-center bg-white m-4 p-4 rounded-md max-w-fit aspect-square">
                <img src={logoURL} alt="arrow icon" height="40px" width="40px" />
            </div>

            <div>
                <p className="font-bold text-3xl">{skillName}</p>
                <p className={`${barlow.className} text-[#6f7074]`}>{skillType}</p>
            </div>
        </div>
    );
}