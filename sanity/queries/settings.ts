import { groq } from "next-sanity";

export const HEADER_QUERY = groq`
    *[_type == "settings" && language==$lang][0]{
        header[]{
            _type == "internalLinkHeader" => {
                "_id": @->_id,
                "title": @->title,
                "slug": @->slug.current,
                "type": @->_type,
                "typeOfLink": "internal"
            },
            _type == "externalLinkHeader" => {
                "url": external,
                "label": label,
                "newTab": newTab,
                "typeOfLink": "external"
            }
        }
    }
`;