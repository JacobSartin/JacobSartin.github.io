import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  //! static export, may need to switch once content becomes more dynamic
  output: "export",
};

export default nextConfig;
