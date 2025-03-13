import Sections from "@/components/components/Sections";
import { fetchSanityPageBySlug, } from "@/sanity/sevices/fetchPage";



export const dynamicParams = false;


type ParamsPage = Promise<{ slug: string }>

export default async function Page(props: {
    params: ParamsPage;
}) {
    const params = await props.params;
    const slug = params.slug
    const page = await fetchSanityPageBySlug(slug);
    return (
        <div>
            <Sections sections={page?.sections} />
        </div>
    );
}
