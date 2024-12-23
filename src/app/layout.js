import "./globals.css";

// IMPORT NEXT COMPONENTS
import NextTopLoader from "nextjs-toploader";
import Header from "@/app/components/header/index";
import Footer from "@/app/components/footer/index";

import localFont from 'next/font/local';

// Load Syne font
const syne = localFont({
    src: '/fonts/syne-variablefont.ttf',
    variable: '--font-syne',
    display: 'swap',
});

// Load Sora font
const sora = localFont({
    src: '/fonts/sora-variablefont.ttf',
    variable: '--font-sora',
    display: 'swap',
});

// Metadata for SEO
export const metadata = {
    title: "Home | Digisec Technologies",
    description: "About Digisec Technologies Our Vision: To be a Trusted Digital Transformation Partners for our customers. Our Mission: To be a growth partner by transforming, managing and securing digital footprint of our customers. We provide effective Cloud Transformation, Cyber Security Solution and Consulting Services to our Customers, spread across PAN India. Digisec Technologies, proudly present our […]",
    keywords: "cloud transformation, cyber security, consulting services",
    authors: { name: "Digisec Technologies" },
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    openGraph: {
        title: "Digisec Technologies",
        description: "About Digisec Technologies Our Vision: To be a Trusted Digital Transformation Partners for our customers. Our Mission: To be a growth partner by transforming, managing and securing digital footprint of our customers. We provide effective Cloud Transformation, Cyber Security Solution and Consulting Services to our Customers, spread across PAN India. Digisec Technologies, proudly present our […]",
        url: "https://digisectechnologies.com",
        images: [
            {
                url: "/og-image.jpg",
                width: 800,
                height: 600,
                alt: "Og Image Alt",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Digisec Technologies",
        description: "About Digisec Technologies Our Vision: To be a Trusted Digital Transformation Partners for our customers. Our Mission: To be a growth partner by transforming, managing and securing digital footprint of our customers. We provide effective Cloud Transformation, Cyber Security Solution and Consulting Services to our Customers, spread across PAN India. Digisec Technologies, proudly present our […]",
        images: ["/twitter-image.jpg"],
    },
    icons: {
        icon: [
            { url: "/favicon.png", type: "image/png" },
        ],
    },
	alternates: {
        canonical: "https://digisectechnologies.com",
    },
};

export default function RootLayout({ children }) {

    return (

		<html lang="en">
			<body className={`${sora.variable} ${syne.variable} antialiased bg-body-bg`}>
                <NextTopLoader 
                    color="#FF885B"
                    showSpinner={false}
                />
				<Header />
				<main>{ children }</main>
				<Footer />
			</body>
		</html>

    );

}
