
import { Metadata } from "next";
import Content from "./content"
import { BuildPageMeta } from "@/app/metaDefaults";
export const metadata: Metadata = BuildPageMeta({
  title: "Curriculum Vitae - Keegan Bruer",
  description: "A Full Stack, DevSecOps, and Machine Learning Engineer with experience in diverse projects",
  url: "/CV",
  og_description: "Review my CV or download a copy to share with your network."
})
export default () => {
  return (
    <div>
        <Content />
    </div>
  );
}
