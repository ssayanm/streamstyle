import Head from "next/head";

const Meta = ({ title, keywords, description, siteTitle }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/images/fav.png" />
      <title>{`${title} | ${siteTitle}`}</title>
    </Head>
  );
};

Meta.defaultProps = {
  siteTitle: "StreamStyle",
  keywords: "",
  description: "One Platform For Live Video Engagement & Live Commerce",

  title: "StreamStyle",
};

export default Meta;
