import Sections from "@/components/components/Sections";
import { fetchSanityPageBySlug, fetchSanityPageSlugs } from "@/sanity/sevices/fetchPage";
import { generatePageMetadata } from "@/sanity/sevices/generateMetadata";

export async function generateStaticParams() {
    const slugs = await fetchSanityPageSlugs();
    return slugs;
}
export const dynamicParams = false;


export async function generateMetadata({params}: {params: Promise<{ lang: Locale, slug: string }>}) {
    const {lang, slug} = await params;
    const page = await fetchSanityPageBySlug( slug );
    return generatePageMetadata({ page, slug, locale: lang });
}

export default async function Page({params}: {params: Promise<{ slug: string }>}) {
    const { slug } = await params;
    const page = await fetchSanityPageBySlug( slug );
    return (
        <div>
            <Sections sections={page?.sections} />
        </div>
    )
}