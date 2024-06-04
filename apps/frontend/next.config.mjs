const nextConfig = {
	eslint: { ignoreDuringBuilds: true },
	images: {
		remotePatterns: [
			{
				hostname: "**",
				protocol: "https",
			},
		],
	},
	reactStrictMode: true,
	transpilePackages: [
		"@threadit/ui",
		"@threadit/utils",
		"@threadit/validators",
	],
	typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
