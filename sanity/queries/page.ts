import { groq } from 'next-sanity';
import { heroQuery, manifestoQuery } from './section';


export const PAGE_QUERY = groq`
  *[_type == "page" && slug.current == $slug][0]{
    sections[]{
      ...,
      ${heroQuery},
      ${manifestoQuery}
    },
    title,
    meta_title,
    meta_description,
    noindex,
    ogImage {
      asset->{
        _id,
        url,
        metadata {
          dimensions {
            width,
            height
          }
        }
      }
    }
  }
`;

export const HOME_QUERY = groq`
  *[_type == "home" && language == $lang][0]{
    sections[]{
      ...,
      ${heroQuery},
      ${manifestoQuery}
    },
    title,
    meta_title,
    meta_description,
    noindex,
    ogImage {
      asset->{
        _id,
        url,
        metadata {
          dimensions {
            width,
            height
          }
        }
      }
    }
  }
`;

export const PAGE_SLUG = groq`
*[_type == "page" && defined(slug) && language==$lang ] {
    slug
  }
`;
