import Footer from "@/components/layouts/Footer";
import { Phone, Mail, MapPinHouse } from "lucide-react";
const Contact = () => {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col items-center">
        <div className="flex w-11/12 flex-col gap-12 py-20 sm:w-1/3">
          {/* <img className="mx-auto w-56" src={casa} alt="" /> */}

          <span className="text-4xl font-semibold">
            Help us change the way of we buy fashion,
          </span>

          <span className="text-6xl font-semibold">Partner with CASA.</span>

          <ul className="flex flex-col gap-4">
            <li className="flex flex-row gap-4">
              <Phone /> +91-7900116936
            </li>
            <li className="flex flex-row gap-4">
              <Mail /> casa.derekalmeida@gmail.com
            </li>
            <li className="flex flex-row gap-4">
              <MapPinHouse /> Mumbai, Maharashtra, India
            </li>
          </ul>

          <span>
            We’d love to hear from you! Whether you have a question, feedback,
            or want to collaborate with us, feel free to reach out.
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
