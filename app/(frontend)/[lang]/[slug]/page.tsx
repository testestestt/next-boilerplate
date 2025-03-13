import Sections from "@/components/components/Sections";
import { fetchSanityPageBySlug } from "@/sanity/sevices/fetchPage";
import { generatePageMetadata } from "@/sanity/sevices/generateMetadata";


type ParamsMetadata = Promise<{ lang: Locale; slug: string }>

export async function generateMetadata(props: {params: ParamsMetadata}) {
    const paramsMetadata = await props.params;
    const { lang, slug } =  paramsMetadata; 
    const page = await fetchSanityPageBySlug(slug);
    return generatePageMetadata({ page, slug, locale: lang });
}

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
