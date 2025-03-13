import Image from "next/image"
import SingleLink from "../components/SingleLink";
import { urlFor } from "@/sanity/lib/image";

export default function Approach(section: Section.ApproachProps) {
    return (
        <section>
            <div className="container pt-pink text-black">
                <div className="bg-black h-[1px] w-full opacity-30"></div>
                <div className="flex justify-center lg:justify-start -mx-4 pt-cyan flex-wrap r-gap-red">
                    <div className="order-2 lg:order-1 md:w-10/12 lg:w-6/12 px-4">
                        <Image
                            src={urlFor(section.image).url()}
                            width={section.image.asset.metadata.dimensions.width}
                            height={section.image.asset.metadata.dimensions.height}
                            sizes="(max-width: 768px) 100vw, 50vw"
                            alt={section.image.alt || 'Approach Image'}
                            quality={100}
                            loading="lazy"
                        />
                    </div>
                    <div className="order-1 lg:order-2 w-full lg:w-6/12 px-4 flex flex-col">
                        <div className="flex flex-wrap -mx-4">
                            <div className="md:w-1/12 lg:hidden"></div>
                            <div className="md:w-7/12 lg:w-8/12 px-4">
                                <h2>{section.heading}</h2>
                                <h1 className="pt-blue">{section.title}</h1>
                            </div>
                            <div className="md:w-10/12 px-4 flex flex-col mx-auto lg:mx-0">
                                <p className="pt-red whitespace-pre-line">
                                    {section.description}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-4 mt-auto">
                            <div className="md:w-10/12 px-4  md:mx-auto lg:mx-0">
                                <div className="pt-yellow">
                                    <SingleLink {...section.link}>
                                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13 7.37516L7.05112 1.4021M13 7.37516L7.05112 13.3482M13 7.37516L1 7.37516" stroke="#2D2D2C" strokeMiterlimit="10" strokeLinecap="square"/>
                                        </svg>
                                        <p className="under-custom">
                                            {section.link?.label}
                                        </p>
                                   </SingleLink>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>   
    );
   
}