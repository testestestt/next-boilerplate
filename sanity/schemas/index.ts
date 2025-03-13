import { type SchemaTypeDefinition } from 'sanity'

import page from './documents/page'
import settings from './documents/settings'
import home from './documents/home'
import projectPost from './singles/project.post'
import projectCategory from './singles/project.category'

import hero from './sections/hero';
import featured_projects from './sections/featured_projects'
import studio from './sections/studio'
import services from './sections/services'
import approach from './sections/approach'


import link from './objects/link';
import blockContent from './objects/blockContent';
import featured_project from './objects/featuredProject';
import service from './objects/service'


const documents = [
  page,
  home,
  settings,
]
const sections = [
  hero,
  featured_projects,
  studio,
  services,
  approach
]
const objects = [
  blockContent,
  featured_project,
  link,
  service,
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

