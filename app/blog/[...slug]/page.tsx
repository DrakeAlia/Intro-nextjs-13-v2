import { delay } from "@component/lib/delay";

const getData = async (slug) => {
  const post = await delay(5000);
  return { slug };
};

export default async function BlogPost({ params }) {
  const { slug } = params;
  const post = await getData(slug);
  throw new Error("Yikes!");
  return <div>{post.slug}</div>;
}
