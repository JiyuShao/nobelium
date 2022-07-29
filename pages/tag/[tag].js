import { getAllPosts, getAllTagsFromPosts } from '@/lib/notion'
import ListLayout from '@/layouts/list'

export async function getStaticProps ({ params }) {
  const currentTag = params.tag
  const posts = await getAllPosts({ includePages: false })
  const tags = getAllTagsFromPosts(posts)
  const initialDisplayPosts = posts.filter(
    (post) => post && post.tags && post.tags.includes(currentTag)
  )
  return {
    props: {
      tags,
      posts,
      initialDisplayPosts,
      currentTag
    },
    revalidate: 1
  }
}

export async function getStaticPaths () {
  const posts = await getAllPosts({ includePages: false })
  const tags = getAllTagsFromPosts(posts)
  return {
    paths: Object.keys(tags).map((tag) => ({ params: { tag } })),
    fallback: true
  }
}

export default function Tag ({ tags, posts, initialDisplayPosts, currentTag }) {
  return (
    <ListLayout
      tags={tags}
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      currentTag={currentTag}
    />
  )
}
