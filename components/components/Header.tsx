import Link from "next/link";
import LangChangeHandler from "./LangChangeHandler";

export default function Header({navigation, lang}: {navigation: Sanity.HeaderNavigation, lang: Locale}) {
    return(
        <header>
            {navigation.map((item) => {
                if (item.typeOfLink === 'internal' && item.type === 'page') {
                return (
                    <Link href={`/${lang}/${item.slug}`} key={item._id}>
                        {item.title}
                    </Link>
                );
                }
                if (item.typeOfLink === 'internal' && item.type === 'home') {
                return (
                    <Link href={`/${lang}`} key={item._id}>
                        {item.title}
                    </Link>
                );
                }
                if (item.typeOfLink === 'internal' && item.type === 'project.post') {
                return (
                    <Link href={`/${lang}/projects/${item.slug}`} key={item._id}>
                        {item.title}
                    </Link>
                );
                }
                if (item.typeOfLink === 'external') {
                return (
                    <a href={item.url} target={item.newTab ? "_blank" : undefined} rel={item.newTab ? "noopener noreferrer" : undefined}>
                        {item.label}
                    </a>
                );
                }
                return null;
            })}
            <LangChangeHandler lang={lang} />
        </header>
    )
    
}