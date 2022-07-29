import Link from 'next/link'
import BLOG from '@/blog.config'
import formatDate from '@/lib/formatDate'
import TagItem from './TagItem'

const BlogPost = ({ post }) => {
  return (
    <li key={post.slug} className="py-8">
      <article>
        <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
          <dl>
            <dt className="sr-only">Published on</dt>
            <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
              <time dateTime={post?.date?.start_date}>
                {formatDate(post?.date?.start_date, BLOG.lang)}
              </time>
            </dd>
          </dl>
          <div className="space-y-5 xl:col-span-3">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold leading-8 tracking-tight">
                  <Link href={`${BLOG.path}/${post.slug}`}>
                    <a className="text-gray-900 dark:text-gray-100">
                      {post.title}
                    </a>
                  </Link>
                </h2>
                <div className="flex flex-wrap">
                  {post.tags.map((tag) => (
                    <TagItem key={tag} tag={tag} />
                  ))}
                </div>
              </div>
              <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                {post.summary}
              </div>
            </div>
            <div className="text-base font-medium leading-6">
              <Link
                href={`${BLOG.path}/${post.slug}`}
                aria-label={`Read "${post.title}"`}
              >
                <a className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                  Read more &rarr;
                </a>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </li>
  )
}

export default BlogPost
