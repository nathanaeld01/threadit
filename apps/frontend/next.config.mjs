const nextConfig = {
	eslint: { ignoreDuringBuilds: true },
	transpilePackages: [
		"@threadit/ui",
		"@threadit/utils",
		"@threadit/validators",
	],
	typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
