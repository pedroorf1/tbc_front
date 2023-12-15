import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";

import Head from "next/head";

const Home = () => {
  const [logado, setLogado] = useState(false);
  const router = useRouter();
  React.useEffect(() => {
    (async () => {
      if (!logado && !(typeof window === undefined)) {
        return router.push("/login");
      }
    })();
  }, []);

  return (
    <div>
      <Head>
        <title>tbc - trabalhos freelancers</title>
        <meta name="description" content="trabalhos freelancers" />
      </Head>
      oi
    </div>
  );
};

export default Home;
