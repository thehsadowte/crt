import { paraglide } from "@inlang/paraglide-js-adapter-next/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = paraglide({
  paraglide: {
    project: "./project.inlang",
    outdir: "./src/paraglide",
  },
  images: {
    domains: ["fakestoreapi.com"],
  },
});

export default nextConfig;
