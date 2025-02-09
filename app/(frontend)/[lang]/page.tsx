import Sections from "@/components/components/Sections";
import { fetchSanityHome  } from "@/sanity/sevices/fetchPage";
import { generatePageMetadata } from "@/sanity/sevices/generateMetadata";

export async function generateMetadata({params}: {params: Promise<{ lang: Locale }>}) {
    const { lang } = await params;
    const page = await fetchSanityHome( lang );

    return generatePageMetadata({ page, slug: 'home', locale: lang });
}

export default async function Home({params} : {params: Promise<{ lang: Locale }>}) {
    const {lang} = await params;
    const page = await fetchSanityHome( lang );

    return (
        <main>
            <Sections sections={page?.sections} />
        </main>
    )
}