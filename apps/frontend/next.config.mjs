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
		"@threadit/forms",
	],
	typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
