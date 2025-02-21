import Link from 'next/link'
import Image from 'next/image'
import BLOG from '@/blog.config'

export default function Hero () {
  return (
    <>
      <div className="my-12 flex flex-col items-center gap-x-12 xl:mb-12 xl:flex-row">
        <div>
          <h1 className="pb-6 text-3xl font-semibold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            哈喽
          </h1>
          <h2 className="prose text-lg text-gray-600 dark:text-gray-400">
            {'欢迎来到啊鸡同学切里哦的博客，空闲时喜欢开发 '}
            <Link href={BLOG.githubLink}>
              <span className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                各种项目
              </span>
            </Link>
            {' 和阅读有趣、有价值、有意义的 '}
            <Link href={BLOG.readingLink}>
              <span className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                内容
              </span>
            </Link>
            {'， 并整理成 '}
            <Link href={`${BLOG.path}/`}>
              <span className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                博客笔记
              </span>
            </Link>
            {' 。'}
          </h2>
        </div>
        <div className="min-w-[55%] max-w-[90%]">
          <div className="my-6 grid items-start gap-8">
            <div className="group relative rounded-xl border-4 border-primary-400">
              <Link href={BLOG.readingLink}>
                <div className="relative flex items-center justify-between rounded-lg bg-white px-7 py-4 leading-snug dark:bg-black">
                  <div className="flex items-center space-x-5">
                    <Image
                      src="/images/reading.svg"
                      alt="Blog svg"
                      className="h-6 w-6 -rotate-6"
                      width="24"
                      height="24"
                    />
                    <span className="flex-1 pr-6 text-gray-900 dark:text-gray-100">
                      阅读记录：包括公众号、视频、微博、博客、播客等来源
                    </span>
                  </div>
                  <div className="pl-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                    →
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="my-6 grid items-start gap-8">
            <div className="group relative rounded-xl border-4 border-indigo-400">
              <Link href={`${BLOG.path}/`}>
                <div className="relative flex items-center justify-between rounded-lg bg-white px-7 py-4 leading-snug dark:bg-black">
                  <div className="flex items-center space-x-5">
                    <Image
                      src="/images/blog.svg"
                      alt="Reading svg"
                      className="h-6 w-6 -rotate-6"
                      width="24"
                      height="24"
                    />
                    <span className="flex-1 pr-6 text-gray-900 dark:text-gray-100">
                      博客笔记：日常记录笔记，偶尔发发技术博客
                    </span>
                  </div>
                  <div className="pl-6 text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400">
                    →
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="my-6 grid items-start gap-8">
            <div className="group relative rounded-xl border-4 border-green-400">
              <Link href={BLOG.githubLink}>
                <div className="relative flex items-center justify-between rounded-lg bg-white px-7 py-4 leading-snug dark:bg-black">
                  <div className="flex items-center space-x-5">
                    <Image
                      src="/images/earth.svg"
                      alt="Website svg"
                      className="h-6 w-6 -rotate-6"
                      width="24"
                      height="24"
                    />
                    <span className="flex-1 pr-6 text-gray-900 dark:text-gray-100">
                      个人项目：涉及 Flutter、小程序、低代码、云函数等
                    </span>
                  </div>
                  <div className="pl-6 text-green-500 hover:text-green-600 dark:hover:text-green-400">
                    →
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
