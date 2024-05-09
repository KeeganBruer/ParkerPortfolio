
  

import { Metadata, ResolvingMetadata } from "next";
import Content from "./content"

import { BuildPageMeta } from "@/app/metaDefaults";
import { getPostContent, getPostData, getPostMeta } from "@/hooks/getPostData";
import dynamic from "next/dynamic";
type Props = {
    params: { article: string[] }
    searchParams: { [key: string]: string | string[] | undefined }
}
export const generateMetadata = async (
    { params, searchParams }: Props,
    parent: ResolvingMetadata
  ): Promise<Metadata> => {
    // read route params
    const { article } = params
    let articleMeta = await getPostMeta(article);
    return BuildPageMeta({
        title: articleMeta.title,
        description: articleMeta.description,
        socialCover: articleMeta.cover
    })
}
export const generateStaticParams = async () => {
    let posts = await getPostData(undefined, {visibilityOverride:true});

    return posts.map((post) => ({
        article: post.id.split("/"),
    }))
}
export default async (props: { params: any }) => {
    const { article } = props.params
    let PostComp = await getPostContent(article);
    
    return (
        <div>
            <Content>
                <PostComp />
            </Content>
        </div>
    );
}
