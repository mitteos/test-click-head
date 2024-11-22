import type { Metadata } from "next";
import "./globals.scss";
import { Header } from "@/shared/layouts";
import { ToastProvider } from "@/shared/providers/ToastProvider";
import QueryProvider from "@/shared/providers/QueryProvider";
import styles from "./layout.module.scss";

export const metadata: Metadata = {
  title: "Some market",
  description: "test project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <ToastProvider>
            <Header />
            <main className={styles.container}>{children}</main>
          </ToastProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
