export const openGraphMeta = {
    title: "Keegan Bruer",
    description: "A Full Stack, DevSecOps, and Machine Learning Engineer with experience in delivering secure, high-quality software empowered by AI.",
    url: "https://keeganbruer.com",
    images: [
        {
            url: "https://keeganbruer.com/SocialThumbnail.jpg",
            width: 1200,
            height: 627
        }
    ]
};
export const DefaultMeta = {
    title: "Keegan Bruer",
    description: "A Full Stack, DevSecOps, and Machine Learning Engineer with experience in delivering secure, high-quality software empowered by AI.",
    openGraph:openGraphMeta,
    icons: [
      { url:"/favicon.ico", sizes:"any"}
    ]
};
  
export const BuildPageMeta = (details: {
    title?: string,
    description?:string,
    url?: string,
    socialCover?:string,
    og_description?:string,
}) => {
    const Title = details.title != undefined ? details.title : "Keegan Bruer"
    const Description = details.description != undefined
        ? details.description
        : "A Full Stack, DevSecOps, and Machine Learning Engineer with experience in delivering secure, high-quality software empowered by AI."
    const url_link = "https://keeganbruer.com" + (details.url != undefined ? details.url : "/")
    const socialCover = details.socialCover != undefined ? details.socialCover : "https://keeganbruer.com/SocialThumbnail.jpg"
    const og_description = details.og_description != undefined ? details.og_description : Description
    return {
        ...DefaultMeta,
        metadataBase: new URL('https://keeganbruer.com'),
        title: Title,
        description: Description,
        openGraph: {
            title: Title,
            description: og_description,
            url: url_link,
            images: [
                {
                    url: socialCover,
                    width: 1200,
                    height: 627
                }
            ]
        },
    };
}