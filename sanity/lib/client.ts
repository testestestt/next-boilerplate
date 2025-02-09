import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'
import { studioUrl } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: "published",
  stega: {studioUrl}
})
