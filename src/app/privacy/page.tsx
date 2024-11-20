import privacy_data from "@/data/privacy-policy.json";
import Footer from "@/components/layouts/Footer";
const Privacy = () => {
  const { introduction, sections } = privacy_data;

  return (
    <>
      <div className="flex min-h-screen w-full flex-col items-center">
        <div className="flex w-10/12 flex-col gap-8 py-20 sm:w-1/3">
          <span className="text-6xl font-semibold">Privacy Policy</span>
          <span className="text-2xl">{introduction}</span>

          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="flex flex-col gap-1">
              <span className="text-xl italic">{section.title}</span>
              <span>{section?.note}</span>

              <ul className="list-disc">
                {section.content.map((item, itemIndex) => {
                  const [key, value] = Object.entries(item)[0]; // Get key-value pair
                  return (
                    <li key={itemIndex}>
                      <strong>
                        {key
                          .replace(/-/g, " ")
                          .split(" ")
                          .map(
                            (word) =>
                              word.charAt(0).toUpperCase() +
                              word.slice(1).toLowerCase(),
                          )
                          .join(" ")}
                        :{" "}
                      </strong>
                      {value}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;
