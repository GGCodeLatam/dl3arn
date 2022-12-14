import Head from "next/head";

interface Props {
  description?: string;
  image?: string;
  title?: string;
  type?: string;
  url?: string;
}
function OGTags({ image, type, title, url, description }: Props) {
  return (
    <Head>
      <title key="title">{title}</title>
      <meta key="description" name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
    </Head>
  );
}
export default OGTags;
