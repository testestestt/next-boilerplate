import { sanityFetch } from "@/sanity/lib/live";
import { HEADER_QUERY } from "@/sanity/queries/settings";



export const fetchSanityHeader = async (lang: Locale): Promise<Sanity.HeaderNavigation>=> {
  const { data } = await sanityFetch({
    query: HEADER_QUERY,
    params: { lang },
  });
  return data?.header;
}