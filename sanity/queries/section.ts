import { groq } from "next-sanity";

export const heroQuery = groq`
    _type == "hero" => {
        _type,
        principal_text,
        image_desktop{
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
        image_tablet{
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
        image_mobile{
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
        }
    }
` 

export const featuredProjectsQuery = groq`
  _type == "featured_projects" => {
      _type,
      headline,
      projects[]{
        _key,
        description,
        project->{
            title,
            slug,
            _id,
            _type
        },
        images[]{
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
        }
      }
  }
`

export const studioQuery = groq`
  _type == "studio" => {
    _type,
    headline,
    title,
    description,
    link {
      ...,
      linkType == 'page' => {
        "page": page->{
            _type,
            "slug": slug.current
        }
      }
    },
    images[]{
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
    }
  }
`

export const servicesQuery = groq`
_type == "service" => {
  _type,
  heading,
  title,
  allServices[]{
    _key,
    title,
  }
}
`

export const approachQuery = groq`
    _type == "approach" => {
        _type,
        heading,
        title,
        description,
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
        link {
          ...,
          linkType == 'page' => {
            "page": page->{
                _type,
                "slug": slug.current
            }
          }
        }
    }
`





export const manifestoQuery = groq`
    _type == "manifesto" => {
        _type,
        title
    }
` 