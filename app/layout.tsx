import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Robert Anadu | Aerospace Engineer (Controls + Software)",
  description:
    "Aerospace engineering portfolio focused on control systems, simulation, hardware, and engineering software.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
        <Navbar />
        <main className="py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}