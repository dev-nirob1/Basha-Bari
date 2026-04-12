import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function FrontLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </>
  );
}