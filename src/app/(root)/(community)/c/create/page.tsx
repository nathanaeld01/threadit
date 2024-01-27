import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { CreateCommunity } from "../../_components/create-community";

export const metadata = {
	title: "Create a Community",
};

const Page = () => (
	<div className="mx-auto mt-4 max-w-2xl md:mt-8">
		<Card className="p-4">
			<CardHeader className="p-0 pb-4">
				<CardTitle>Create a Community</CardTitle>
			</CardHeader>
			<CardContent className="p-0">
				<CreateCommunity />
			</CardContent>
		</Card>
	</div>
);

export default Page;
