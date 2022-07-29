import Link from 'next/link'
import Container from '@/components/Container'
import Hero from '@/components/Hero'
import BlogPost from '@/components/BlogPost'
import { getAllPosts } from '@/lib/notion'
import BLOG from '@/blog.config'

export async function getStaticProps () {
  const posts = await getAllPosts({ includePages: false })
  const initialDisplayPosts = posts.slice(0, 3) || []
  const totalPosts = posts.length
  const showNext = totalPosts > 3
  return {
    props: {
      page: 1, // current page is 1
      totalPages: Math.ceil(totalPosts / BLOG.postsPerPage),
      initialDisplayPosts,
      showNext
    },
    revalidate: 1
  }
}

const blog = ({ initialDisplayPosts, showNext }) => {
  return (
    <Container title={BLOG.title} description={BLOG.description}>
      <Hero />
      <h1 className="text-3xl font-semibold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:leading-14">
        最新文章
      </h1>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {initialDisplayPosts.map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}
      </ul>
      {showNext && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link href={BLOG.path} aria-label="all posts">
            <a className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
              全部文章 &rarr;
            </a>
          </Link>
        </div>
      )}
    </Container>
  )
}

export default blog
