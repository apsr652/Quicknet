/** @format */

import StreamVideoProvider from "@/providers/StreamClientProvider";
import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
	title: "quicknet",
	description: "quicknet",
};

const layout = ({ children }: Readonly<{ children: ReactNode }>) => {
	return (
		<main>
			<StreamVideoProvider>{children}</StreamVideoProvider>
		</main>
	);
};

export default layout;
