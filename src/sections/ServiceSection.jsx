import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";

const ServiceSection = () => {
  return (
    <section className="section-padding bg-black">
        <div className="max-w-7xl mx-auto">
            {/** HEADING */}
            <div className="flex flex-col sm:flex-row justify-between
            items-start sm:item-center mb-12">
                <div>
                    <h2 className="heading-2 clash-display grad1 from-zinc-50">
                        Our Premium Fleet & <br className=""/> Services
                    </h2>
                    <p className="text-zinc-400 max-w-lg">
                        Discover the perfect vehicle for your needs, 
                        backed by unparalled service and support.
                    </p>

                    <Link to="/fleet" className="mt-4 sm:mt-0 flex items-center
                    text-sky-500 hover:text-sky-400 transition-colors">
                        View All Cars <MoveRight className="" />
                    </Link>
                </div>
            </div>

            {/** SERICE CARDS */}
            <div className="grid md:grid-cols-3 lg:grid-cls-3 gap-5 lg:px-16">
                {/** Service Cards */}
                
            </div>
        </div>
    </section>
  )
}

export default ServiceSection