import Link from "next/link";
import Title from "@/components/ui/Title";
import Phone from "@/components/features/phone";
import Footer from "@/components/layouts/Footer";
import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center">
        <div className="grid w-11/12 grid-cols-1 gap-64 py-20 sm:w-fit sm:grid-cols-2">
          <div className="flex flex-col justify-around gap-24 sm:gap-8">
            <div className="">
              <Title classStyle="text-8xl" />
              <span> is coming, to your doorstep.</span>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-4">
                <FaGooglePlay size={56} />
                <FaAppStoreIos size={56} />
              </div>

              <span className="text-sm">Coming to these platforms.</span>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-muted-foreground">
                Join our wishlist to get the exclusive deals and offers.
              </span>
              <Button type="submit">
                <Link href="/newsletter">Join the Wishlist</Link>
              </Button>
            </div>
          </div>

          <div className="w-full">
            <Phone />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
