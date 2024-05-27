import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Suspense } from 'react';
import NextLoadingSkeleton from '@/app/loading';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'ShowX',
	description: 'ShowX website created by Iurai'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Suspense fallback={<NextLoadingSkeleton />}>{children}</Suspense>
		</>
	);
}
