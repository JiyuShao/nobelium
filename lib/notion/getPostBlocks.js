import * as api from '@/lib/server/notion-api'

export async function getPostBlocks(id) {
  const result = await api.getPostBlocks(id)
  return result['results']
}
