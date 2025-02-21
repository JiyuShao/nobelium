import Link from 'next/link'
import { clientConfig } from '@/lib/server/config'

import Container from '@/components/Container'
import BlogPost from '@/components/BlogPost'
import Hero from '@/components/Hero'
import { getAllPosts } from '@/lib/notion'
import { useConfig } from '@/lib/config'
import { useLocale } from '@/lib/locale'

export async function getStaticProps() {
  const posts = await getAllPosts({ includePages: false })
  const postsToShow = posts.slice(0, clientConfig.postsPerPage)
  const totalPosts = posts.length
  const showNext = totalPosts > clientConfig.postsPerPage
  return {
    props: {
      postsToShow,
      showNext
    },
    revalidate: 1
  }
}

export default function Blog({ postsToShow, showNext }) {
  const { title, description } = useConfig()
  const locale = useLocale()

  return (
    <Container title={title} description={description}>
      <Hero />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {postsToShow.map(post => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
      {showNext &&
        (
          <div className="flex justify-end font-medium text-black dark:text-gray-100">
            <Link href={`/search`}>
              <button rel="next" className="block cursor-pointer">
                全部文章 →
              </button>
            </Link>
          </div>
        )}
    </Container>
  )
}
