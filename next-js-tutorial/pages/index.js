import Link from "next/link";

export default function Index() {
  return (
    <>
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