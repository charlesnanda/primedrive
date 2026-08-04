import { ArrowRight } from "lucide-react";
import { useRef, useState } from "react";

const ServiceCard = ({title,description,icon,imageSrc}) => {
    const [isHovered, setIsHovered] = useState(false)

    const cardRef = useRef(null)

    // Handle Mouse Enter
    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    // Handle Mouse Leave
    const handleMouseLeave = () => {
        setIsHovered(false)
    }



  return (
    <div ref={cardRef} 
         onMouseEnter={handleMouseEnter} 
         onMouseLeave={handleMouseLeave} 
         style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: "cover",
            backgroundPosition:"center",
            backgroundRepeat: "no-repeat"
         }} 
         className="min-h-[430px] relative overflow-hidden cursor-pointer
         transition-all duration-500">
        {/** TEXT */}
        <div className="bg-gradient-to-b from-zinc-950 py-7 px-7">
            <h2 className="text-5xl clash-display">{title}</h2>
        </div>

        {/** OVERLAY TEXT */}
        {isHovered && (
            <div className="absolute flex flex-col w-full min-h-full
                    bg-gradient-to-b from-zinc-950 to-transparent flex-1 px-8 top-0
                    center-item">
                <div className="mb-2">{icon}</div>
                <p className="text-center">
                    {description}
                </p>
            </div>
        )}

        {/** BUTTON */}
        <div className="bg-gradient-to-t absolute bottom-0 from-zinc-950
            py-7 px-7 to-transparent flex min-w-full justify-end">
            <div className="h-16 w-16 bg-zinc-100 rounded-full
            cursor-pointer hover:bg-sky-200 transition-all duration-300
            ease-out hover:-translate-y-1 center-item group">
                <ArrowRight className="text-zinc-800 font-semibold -rotate-45 
                group-hover:-translate-y-1 transition-transform"/>
            </div>
        </div>
    </div>
  )
}

export default ServiceCard;