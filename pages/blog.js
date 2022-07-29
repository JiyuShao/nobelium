import { getAllPosts, getAllTagsFromPosts } from '@/lib/notion'
import ListLayout from '@/layouts/list'
import BLOG from '@/blog.config'

export async function getStaticProps () {
  const posts = await getAllPosts({ includePages: false })
  const totalPosts = posts.length
  const page = 1
  const initialDisplayPosts = posts.slice(
    BLOG.postsPerPage * (page - 1),
    BLOG.postsPerPage * page
  )
  const tags = getAllTagsFromPosts(posts)

  return {
    props: {
      tags,
      posts,
      initialDisplayPosts,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(totalPosts / BLOG.postsPerPage)
      }
    },
    revalidate: 1
  }
}

export default function Blog ({ tags, posts, initialDisplayPosts, pagination }) {
  return (
    <ListLayout
      tags={tags}
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
    />
  )
}
