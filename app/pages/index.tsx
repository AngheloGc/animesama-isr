import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { getPosts } from '../lib/services'
import styles from '../styles/Home.module.css'
import { HomeProps } from './props'

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anime Sama - Noticias, reseñas, rankings y mucho más</title>
        <meta name="description" content="Ven y entérate de las últimas novedades, tendencias y noticias del mundo del anime y manga." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {posts.map(post => (
        <div>
          <h2>{post.title}</h2>
          <Image src={post.featuredImage.node.sourceUrl} alt={post.title} width={800} height={400} />
          <p>{post.excerpt}</p>
        </div>
      ))}

    </div>
  )
}

export default Home

export const getStaticProps = async () => {
  const posts = await getPosts()

  return {
    props: {
      posts: posts.edges.map((edge: any) => edge.node)
    }
  }
}