import { type SchemaTypeDefinition } from 'sanity'

import page from './documents/page'
import settings from './documents/settings'
import home from './documents/home'
import projectPost from './singles/project.post'
import projectCategory from './singles/project.category'

import manifesto from './sections/manifesto';
import hero from './sections/hero';
import internalLink from './objects/internalLink';
import externalLink from './objects/externalLink';
import blockContent from './objects/blockContent'


const documents = [
  page,
  home,
  settings,
]
const sections = [
  manifesto,
  hero,
]
const objects = [
  internalLink,
  externalLink,
  blockContent
]
const singles = [
  projectCategory,
  projectPost,
]

export const schemaTypes = [
    ...documents,
    ...sections,
    ...objects,
    ...singles,
] 

