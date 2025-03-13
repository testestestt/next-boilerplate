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
      _id: string;
      slug: string
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
      lqip: string;
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
      _type: string;
      slug: string;
    };

    type Link = {
      linkType?: string;
      href?: string;
      label?: string;
      page?: InternalLink;
      openInNewTab?: boolean;
      children?: React.ReactNode;
    }

    type Service = {
      _key: string;
      title: string;
      description: Array<string>;
    }

    type FeaturedProject = {
      description?: string;
      images?: Array<Image>;
      project?: Post;
    }

    type HeaderNavigation = Array<Link>;
    
    type FooterNavigation = {
      sitemap: Array<Link>;
      social_links: Array<Link>;
      mail_contact: Link;
      terms_link: Link;
      locations: string;
    }
  }

  // SECTIONS

  namespace Section {

    type HeroProps = {
      principal_text?: string;
      image_desktop?: Image;
      image_tablet?: Image;
      image_mobile?: Image;
    };

    type FeaturedProjectsProps = {
      heading?: string;
      projects?: Array<Sanity.FeaturedProject>;
      linkText?: string;
    }

    type StudioProps = {
      heading?: string;
      title?: string;
      description?: string;
      link?: Sanity.Link;
      images?: Array<Image>;
    };

    type ServicesProps = {
      heading?: string;
      title?: string;
      allServices?: Array<Sanity.Service>;
    }

    type ApproachProps = {
      heading?: string;
      title?: string;
      description?: string;
      image?: Image;
      link?: Sanity.Link;
    }

    type ManifestoProps = {
      title?: string;
      body?: string;
    };
  }
  
}
  
  export {};
  