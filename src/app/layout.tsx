import type { Metadata } from 'next';
import "./css/main.css";
import  Head from "next/head"
import Script from "next/script"
import StoreProvider from "./stores/StoreProvider";

const title = `Admin One React Tailwind Eric`;

const description = "Panel admin One - Next.js y Tailwind with TypeScript and dark mode";

const url = "https://justboil.github.io/admin-one-react-tailwind/";

const image = `https://static.justboil.me/templates/one/repo-tailwind-react.png`;

const imageWidth = "1920";

const imageHeight = "960";

export const metadata: Metadata = {
    title,
    description,
    icons: "/admin-one-react-tailwind/favicon.png",
    twitter: {
        card: "summary_large_image",
        title,
        description,
        images: {
            url: image,
            width: imageWidth,
            height: imageHeight,
        },
    },
    openGraph: {
        url,
        title,
        images: {
            url: image,
            width: imageWidth,
            height: imageHeight,
        },
    },
};


export default function RootLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <StoreProvider>
            <html lang="es" className="style-basic">
                <Head>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-T6BPTRYMX8"></script>
                    <script
                            dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-T6BPTRYMX8');
                        `,
                        }}
                    />
                </Head>

                <body
                    className={`bg-gray-50 dark:bg-slate-800 dark:text-slate-100 antialiased`}
                >
                    {children}
                </body>
            </html>
        </StoreProvider>
    );
}