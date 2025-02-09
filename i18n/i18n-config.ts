import { SupportedLanguages } from "@sanity/document-internationalization";

export const defaultLocale: Locale = 'en';
export const locales: Locale[] = ['en', 'es']
export const languagesSanity = [
  {id: 'en', title: 'English'},
  {id: 'es', title: 'Spanish'},
] as SupportedLanguages;

