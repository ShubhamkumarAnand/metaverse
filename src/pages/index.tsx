import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Metaverse</title>
        <meta name="description" content="Metaverse World" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Hello Metaverse</h1>
      </main>
    </>
  );
};

export default Home;
