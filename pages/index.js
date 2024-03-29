import Head from "next/head";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
          excepturi perspiciatis suscipit unde culpa deleniti maiores. Velit,
          sunt alias ad similique aperiam maiores excepturi dolor, in, ipsam aut
          reiciendis facilis.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
          facilis quas voluptatibus quos numquam voluptatum dicta, at facere?
          Eum optio earum blanditiis quo at quidem maiores tenetur illo
          repudiandae eaque?
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
