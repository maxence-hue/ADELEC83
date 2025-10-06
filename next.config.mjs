import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/
});

const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: []
  }
};

export default withMDX(nextConfig);
