import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kate & Renzo | A Garden Celebration",
  description: "Join Kate and Renzo for their garden wedding celebration.",
  icons: {
    icon: [
      {
        type: "image/png",
        url: "/wedding-assets/favicon-bouquet.png",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="grainy min-h-full flex flex-col">{children}</body>
    </html>
  );
}
