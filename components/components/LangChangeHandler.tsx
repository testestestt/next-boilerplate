"use client";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import {locales} from "@/i18n/i18n-config";



export default function LangChangeHandler ({lang} : {lang: Locale}): JSX.Element {

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);
  const otherLocale = locales.filter((locale) => locale !== lang)[0];

  
  return (
    <>
    <Link href={`/${otherLocale}`}>
      {otherLocale}
    </Link>
    </> 
  );
};