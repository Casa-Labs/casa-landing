import Footer from "@/components/layouts/Footer";

const About = () => {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col items-center">
        <div className="flex w-11/12 flex-col gap-8 py-20 sm:w-1/3">
          <span className="text-6xl font-semibold">Our Journey</span>

          <span>
            Welcome to CASA, where fashion meets innovation. We are redefining
            the online shopping experience with a fun, interactive, and engaging
            platform designed to make discovering new styles effortless and
            exciting. Inspired by the best elements of social apps, CASA blends
            personalization, creativity, and seamless shopping into one cohesive
            experience.
          </span>

          <span>
            At CASA, we believe shopping should be more than just buying—it’s
            about exploration and connection. Our platform empowers customers to
            discover new trends, swipe through collections, and shop
            effortlessly, all while enjoying an immersive and user-friendly
            interface. With features like AI-driven recommendations, swipe
            shopping, and in-app purchases, CASA transforms every visit into an
            engaging journey.
          </span>

          <span>
            We are committed to collaborating with forward-thinking brands to
            bring the latest and best styles to our audience. Together, we aim
            to create a community where fashion and technology come together,
            offering customers a smarter, more exciting way to shop.
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
