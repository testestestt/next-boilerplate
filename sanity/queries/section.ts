import { groq } from "next-sanity";

export const heroQuery = groq`
    _type == "hero" => {
        _type,
        title
    }
` 

export const manifestoQuery = groq`
    _type == "manifesto" => {
        _type,
        title
    }
` 