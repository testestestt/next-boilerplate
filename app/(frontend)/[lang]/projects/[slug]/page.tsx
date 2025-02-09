import { fetchSanityPostBySlug, fetchSanityPostSlugs } from '@/sanity/sevices/fetchPost';
import PortableTextRenderer  from '@/components/components/PortableTextRenderer';


export async function generateStaticParams() {
    const slugs = await fetchSanityPostSlugs();
    return slugs;
}
export const dynamicParams = false;

export default async function Post({params}: {params: Promise<{ slug: string }>}) {
    const { slug } = await params;
    const post = await fetchSanityPostBySlug( slug );
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.excerpt}</p>
            <PortableTextRenderer value={post.body} />
        </div>
    )
}