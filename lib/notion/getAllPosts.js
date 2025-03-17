import { config as BLOG } from '@/lib/server/config'

import { idToUuid } from 'notion-utils'
import dayjs from 'dayjs'
import * as api from '@/lib/server/notion-api'

/**
 * @param {{ includePages: boolean }} - false: posts only / true: include pages
 */
export async function getAllPosts({ includePages = false }) {
  const id = idToUuid(process.env.NOTION_DATABASE_ID)

  const result = await api.getDatabase(id)

  let posts = result['results'].map((item) => {
    const properties = item.properties
    return {
      id: item.id,
      created_time: item.created_time,
      last_edited_time: item.last_edited_time,
      archived: item.archived,
      in_trash: item.in_trash,
      parent: item.parent,
      url: item.url,
      public_url: item.public_url,
      // custom properties
      date: dayjs(properties['date']['date']['start']).valueOf(),
      type: properties['type']['select']['name'],
      slug: properties['slug']['rich_text'].length > 0 ? properties['slug']['rich_text'][0]['plain_text'] : '',
      tags: properties['tags']['multi_select'].map((tag) => tag.name),
      summary: properties['summary']['rich_text'].length > 0 ? properties['summary']['rich_text'][0]['plain_text'] : '',
      title: properties['title']['title'].length > 0 ? properties['title']['title'][0]['plain_text'] : '',
      status: properties['status']['select']['name'],
      'Last Edited Time': dayjs.tz(properties['Last Edited Time']['last_edited_time']).valueOf(),
    }
  })

  // remove all the the posts doesn't meet requirements
  posts = posts
    .filter(post =>
      includePages
        ? post.type === 'Post' || post.type === 'Page'
        : post.type === 'Post'
    )
    .filter(post =>
      post.title &&
      post.slug &&
      post.status === 'Published' &&
      post.date <= new Date()
    )

  // Sort by date
  if (BLOG.sortByDate) {
    posts.sort((a, b) => b.date - a.date)
  }
  return posts
}
