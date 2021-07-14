import Link from "next/link";
import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <title>Главная страница</title>
        <meta name="keywords" content="Ключевые слова" />
        <meta name="description" content="Описание" />
        <meta charSet="utf-8" />
      </Head>
      <h1>Hello Next.js</h1>
      <p>
        <Link href={"/about"}>
          <a>About</a>
        </Link>
      </p>
      <p>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        sunt ducimus iste ipsum neque corrupti vitae architecto eveniet
        necessitatibus veritatis debitis repellendus mollitia quo eius eaque,
        dolore recusandae minus quas!
      </p>
    </>
  );
}
