import Image from 'next/image';
import Link from 'next/link';

import { urlFor } from '@/sanity/lib/image';
import LinkWithArrow from '../components/LinkWithArrow';


export default async function FeaturedProjects(section: Section.FeaturedProjectsProps) {

    return(
        <section>
            <div className="container pt-pink text-black">
                <div className="bg-black h-[1px] w-full opacity-30"></div>
                <div className="flex pt-cyan">
                    <div className="lg:w-4/12">
                        <h2>{section.heading}</h2>
                    </div>
                </div>
                {section.projects && section.projects.map((project) => (
                    <div className="flex flex-wrap pt-red -mx-4" key={project.project?._id}>

                        { project.images?.[0] && (
                            <div className="w-full md:w-6/12 px-4">
                            <Link href={`./projects/${project.project?.slug.current}`}>
                                <Image
                                    src={urlFor(project.images[0]).url()}
                                    width={project.images[0].asset.metadata.dimensions.width}
                                    height={project.images[0].asset.metadata.dimensions.height}
                                    sizes="(max-width: 768px) 100vw , 50vw"
                                    alt={project.images[0].alt || 'Project Image'}
                                    quality={100}
                                />
                            </Link>
                        </div>
                        )}
                        {project.images?.[1] && (
                            <div className="w-full md:w-6/12 hidden md:flex px-4 ">
                                <Link href={`./projects/${project.project?.slug.current}`} className='hidden md:block'>
                                    <Image
                                        src={urlFor(project.images[1]).url()}
                                        width={project.images[1].asset.metadata.dimensions.width}
                                        height={project.images[1].asset.metadata.dimensions.height}
                                        sizes="(max-width: 768px) 100vw , 50vw"
                                        alt={project.images[1].alt || 'Project Image'}
                                        quality={100}
                                    />
                                </Link>
                            </div>
                        )}
                       
                        <div className="w-full pt-cyan px-4">
                            <div className="flex flex-wrap -mx-4 gap-y-8">
                                { project.description && (
                                    <div className="w-full md:w-9/12 2xl:w-8/12 px-4">
                                        <p className='h1'>
                                            {project.description} 
                                        </p>
                                    </div>
                                )}
                                {section.linkText && (
                                    <div className="w-full md:w-3/12 2xl:w-4/12 md:pt-2 px-4 flex md:justify-end items-start">
                                        <LinkWithArrow href={`./projects/${project.project?.slug.current}`}>
                                            {section.linkText}
                                        </LinkWithArrow>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
                
            </div>
        </section>

    );
}