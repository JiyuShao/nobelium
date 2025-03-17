import { Client } from '@notionhq/client'

const { NOTION_API_KEY } = process.env

const notion = new Client({ auth: NOTION_API_KEY });

export function getDatabase(databaseId) {
  return notion.databases.query({ database_id: databaseId })
}

export function getPostBlocks(pageId) {
  return notion.blocks.children.list({ block_id: pageId })
}

export function getUsers() {
  return notion.users.list()
}
