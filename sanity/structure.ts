import type {StructureResolver} from 'sanity/structure'
import { SINGLETONS } from './lib/singletons'
import { languagesSanity } from '@/i18n/i18n-config'
import { Language } from '@sanity/document-internationalization'

const LanguagesStructure: string[] = []

if (Array.isArray(languagesSanity)) {
  languagesSanity.forEach((language) => {
    LanguagesStructure.push(language.id)
  })
}

const singlesWithoutHome = SINGLETONS.filter((singleton) => singleton._type !== 'home')

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
      .title('Home')
      .id('home')
      .child(
        S.list()
        .title('Home')
        .id('home')
        .items(
          LanguagesStructure.map((language) =>
            S.documentListItem()
              .schemaType('home')
              .id(`home-${language}`)
              .title(`Home (${language.toLocaleUpperCase()})`)
          )
        )
      ),
      S.listItem()
      .title('Pages')
      .child(
        S.list()
          .title('Pages')
          .items([
            S.listItem()
              .title('Pages (EN)')
              .child(
                S.documentList()
                  .title('Pages (EN)')
                  .filter('_type == "page" && language == "en"')
            ),
            S.listItem()
              .title('Pages (ES)')
              .child(
                S.documentList()
                  .title('Pages (ES)')
                  .filter('_type == "page" && language == "es"')
            ),
          ])
      ),
      S.listItem()
      .title('Projects')
      .child(
        S.list()
          .title('Projects')
          .items([
            S.listItem()
              .title('Projects (EN)')
              .child(
                S.documentList()
                  .title('Projects (EN)')
                  .filter('_type == "project.post" && language == "en"')
            ),
            S.listItem()
              .title('Projects (ES)')
              .child(
                S.documentList()
                  .title('Projects (ES)')
                  .filter('_type == "project.post" && language == "es"')
            ),
          ])
      ),
      ...singlesWithoutHome.map((singleton) =>
        S.listItem()
          .title(singleton.title)
          .id(singleton.id)
          .child(
            S.list()
              .title(singleton.title)
              .id(singleton.id)
              .items(
                LanguagesStructure.map((language) =>
                  S.documentListItem()
                    .schemaType(singleton._type)
                    .id(`${singleton.id}-${language}`)
                    .title(`${singleton.title} (${language.toLocaleUpperCase()})`)
                )
              )
          )
        ),
      S.divider(),
      S.listItem()
        .title('Translation Metadata')
        .id('translation.metadata')
        .child(
          S.documentList()
            .title('Translation Metadata')
            .filter('_type == "translation.metadata"')
        ),
    ])
