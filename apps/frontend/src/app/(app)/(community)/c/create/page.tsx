import CreateCommunity from "@threadit/forms/create-community";
import { Card, CardContent, CardHeader, CardTitle } from "@threadit/ui/card";

export const metadata = {
	title: "Create a Community",
};

export default () => {
	return (
		<div className="layout-offset mx-auto w-full max-w-2xl">
			<Card>
				<CardHeader className="bg-alternate/15 p-4">
					<CardTitle className="text-base">
						Create a Community
					</CardTitle>
				</CardHeader>
				<CardContent className="p-4 pt-0">
					<CreateCommunity />
				</CardContent>
			</Card>
		</div>
	);
};
