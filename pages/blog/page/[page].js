import { getAllPosts, getAllTagsFromPosts } from '@/lib/notion'
import ListLayout from '@/layouts/list'
import BLOG from '@/blog.config'

export async function getStaticProps ({ params }) {
  const { page } = params
  const posts = await getAllPosts({ includePages: false })
  const totalPosts = posts.length
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
        currentPage: +page,
        totalPages: Math.ceil(totalPosts / BLOG.postsPerPage)
      }
    },
    revalidate: 1
  }
}

export async function getStaticPaths () {
  const posts = await getAllPosts({ includePages: false })
  const totalPosts = posts.length
  const totalPages = Math.ceil(totalPosts / BLOG.postsPerPage)
  return {
    // remove first page, we 're not gonna handle that.
    paths: Array.from({ length: totalPages - 1 }, (_, i) => ({
      params: { page: '' + (i + 2) }
    })),
    fallback: true
  }
}

export default function Page ({ tags, posts, initialDisplayPosts, pagination }) {
  return (
    <ListLayout
      tags={tags}
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
    />
  )
}
