import { groq } from 'next-sanity';

export const POST_SLUG = groq`
*[_type == "project.post" && defined(slug) && language==$lang ] {
    slug
  }
`;


export const POST_QUERY = groq`
  *[_type == "project.post" && slug.current == $slug][0]{
    title,
    excerpt,
    client,
    image{
      asset->{
        _id,
        url,
        mimeType,
        metadata {
          lqip,
          dimensions {
            width,
            height
          }
        }
      },
      alt
    },
    body[]{
      ...,
      _type == "image" => {
        ...,
        asset->{
          _id,
          url,
          mimeType,
          metadata {
            lqip,
            dimensions {
              width,
              height
            }
          }
        }
      }
    },
    categories[]->{ 
      title,
      slug
    },
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
    },
    _createdAt,
    _updatedAt,
  }
`;


export const POST_PAGINATION_QUERY = groq`
  *[_type == "project.post" && language==$lang && defined(slug.current) && slug.current != ""] | order(_createdAt desc)[$offset...$limit]{
    _id,
    title,
    excerpt,
    image{
      asset->{
        _id,
        url,
        mimeType,
        metadata {
          lqip,
          dimensions {
            width,
            height
          }
        }
      },
      alt
    },
    categories[]->{ 
      title,
      slug
    },
    _createdAt,
    _updatedAt
  }
`;