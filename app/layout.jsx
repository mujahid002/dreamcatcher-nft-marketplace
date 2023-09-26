import "@styles/globals.css";
import Link from "next/link";

export const metadata = {
    title: "Dreamcatcher",
    description: "Decentralized Lottery",
};

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <div className="main">
                    <div>
                        <nav className="border-b p-6">
                            <p className="text-4xl font-bold">Dreamcatcher</p>
                            <div className="flex mt-4">
                                <Link href="/" className="mr-4 text-pink-500">
                                    Home
                                </Link>
                                <Link href="/create-nft" className="mr-6 text-pink-500">
                                    Sell NFT
                                </Link>
                                <Link href="/my-nfts" className="mr-6 text-pink-500">
                                    My NFTs
                                </Link>
                                <Link href="/dashboard" className="mr-6 text-pink-500">
                                    Dashboard
                                </Link>
                            </div>
                        </nav>
                    </div>
                    <main className="app">{children}</main>
                </div>
            </body>
        </html>
    );
};

export default RootLayout;
