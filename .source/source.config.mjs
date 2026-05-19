// source.config.ts
import { defineConfig } from "fumadocs-mdx/config";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import remarkEmoji from "remark-emoji";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeExternalLinks from "rehype-external-links";
var source_config_default = defineConfig({
  mdxOptions: {
    remarkPlugins: [
      remarkMath,
      remarkGfm,
      remarkBreaks,
      remarkEmoji
    ],
    rehypePlugins: [
      rehypeKatex,
      rehypeSlug,
      rehypeAutolinkHeadings,
      [
        rehypePrettyCode,
        {
          theme: "github-dark"
        }
      ],
      [
        rehypeExternalLinks,
        {
          target: "_blank",
          rel: ["noopener", "noreferrer"]
        }
      ]
    ]
  }
});
export {
  source_config_default as default
};
