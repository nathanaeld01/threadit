import baseConfig from "@threadit/eslint/base";
import nextConfig from "@threadit/eslint/next";
import reactConfig from "@threadit/eslint/react";

export default [...baseConfig, ...reactConfig, ...nextConfig];
