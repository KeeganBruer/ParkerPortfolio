
import { Metadata } from "next";
import Content from "./content"

import { BuildPageMeta } from "@/app/metaDefaults";
import { getPostData } from "@/hooks/getPostData";
export const metadata: Metadata = BuildPageMeta({
  title: "The Software Deep-dive",
  description: "Explore with me as I deepen my understanding through writing. Sharing my insights on emerging technology and methodologies.",
  url: "/Deepdive",
  socialCover:"/Deepdive/DeepdiveSocialCover.png"
})


export default async () => {
  let posts = await getPostData();

  return (
    <div>
      <Content posts={posts} />
    </div>
  );
}
