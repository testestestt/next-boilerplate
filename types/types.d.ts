import type {
    SanityImageObject,
    SanityImageDimensions,
  } from "@sanity/image-url/lib/types/types";
  import type { SanityDocument } from "next-sanity";
  
declare global {

  type Locale =  'en' | 'es';

  namespace Sanity {
    // Page Types
    type PageBase = SanityDocument<{
      title?: string;
      slug: { current: string };
      meta_title: string;
      meta_description: string;
      ogImage?: Image;
      noindex: boolean;
      language: string;
    }>;

    type Page = PageBase & {
      readonly _type: "page";
      sections?: Section[];
    };

    type Post = PageBase &
    SanityDocument<{
      readonly _type: "project.post";
      excerpt?: string;
      body: any;
      image?: Image;
    }>;

    type Section = {
      _type: string;
      _key: string;
    };

    
    // Image Types
    interface AssetMetadata {
      dimensions: SanityImageDimensions;
      dominantColor: string;
    }
  
    interface Asset {
      _id: string;
      metadata: AssetMetadata;
    }
  
    type Image = SanityImageObject & Partial<{
      alt: string;
      asset: Asset;
    }>;

    type ExternalLink = {
      url: string;
      label: string;
      newTab: boolean;
      typeOfLink: "external";
    };

    type InternalLink = {
      _id: string;
      title: string;
      slug?: string;
      type: string;
      typeOfLink: "internal";
    };

    type HeaderNavigation = Array<InternalLink | ExternalLink>;
    
  }

  // SECTIONS

  namespace Section {

    type HeroProps = {
      title?: string;
    };

    type ManifestoProps = {
      title?: string;
      body?: string;
    };
  }
  
}
  
  export {};
  