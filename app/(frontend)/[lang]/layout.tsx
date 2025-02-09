import LangChangeHandler from "@/components/components/LangChangeHandler";
import { locales } from "@/i18n/i18n-config";
import { fetchSanityHeader } from "@/sanity/sevices/fetchSettings";
import Header from "@/components/components/Header";

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}


export default async function MainLayout({
  children,
  params,
}: {
  readonly children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {

  const {lang} = await params;
  const navigation = await fetchSanityHeader(lang);

  return (
    <>
      {
        navigation && (
          <Header navigation={navigation} lang={lang} />
        )
      }
      {children}
    </>
  );
}