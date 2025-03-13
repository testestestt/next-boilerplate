import Link from "next/link";
import SingleLink from "./SingleLink";
import LangChangeHandler from "./LangChangeHandler";

export default function Header({navigation, lang}: {navigation: Sanity.HeaderNavigation, lang: Locale}) {
    return(
        <header className="mix-blend-difference fixed top-0 w-full">
            <div className="container">
                <div className="flex pt-6 md:pt-8 justify-between items-center text-white">
                    <Link href="/">
                        <h1 className="text-white">Studio Test</h1>
                    </Link>
                    <div className="flex gap-8">
                        {
                            navigation.map((navItem, index) => (
                                <SingleLink key={index} {...navItem} >
                                    {navItem.label}
                                </SingleLink>
                            ))
                        }
                        <LangChangeHandler lang={lang} /> 
                    </div>
                </div>
            </div>
        </header>

    )
    
}