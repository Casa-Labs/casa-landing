import Footer from "@/components/layouts/Footer";
const Privacy = () => {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col items-center">
        <div className="flex w-10/12 max-w-prose flex-col gap-8 py-20">
          <span className="text-6xl font-semibold">Privacy Policy</span>
          <span>Effective Date: 26.12.2024</span>
          <p>
            Casa (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), a
            property of Backitup Finance Private Limited, is committed to
            protecting your privacy. This Privacy Policy outlines how we
            collect, use, disclose, and protect your personal information when
            you use the Casa mobile application (&quot;App&quot;) or interact
            with us. By accessing or using Casa, you agree to the terms outlined
            in this Privacy Policy.
          </p>

          <ol className="flex list-decimal flex-col gap-6">
            <li>
              <h2 className="text-xl font-bold">Information We Collect</h2>
              <ol className="list-lowerAlpha flex flex-col gap-4 py-4 pl-4">
                <li>
                  <h3 className="font-bold">Information You Provide to Us</h3>
                  <ul className="list-disc pl-8">
                    <li>
                      <span className="mr-1 font-semibold">
                        Account Information:
                      </span>
                      Name, email address, phone number, profile picture, and
                      other details you provide when creating an account.
                    </li>
                    <li>
                      <span className="mr-1 font-semibold">
                        Payment Information:
                      </span>
                      Credit/debit card details, billing address, and
                      transaction history for purchases made through Casa.
                    </li>
                    <li>
                      <span className="mr-1 font-semibold">Profile Data:</span>
                      Preferences, saved items, and customizations within the
                      App.
                    </li>
                  </ul>
                </li>
                <li>
                  <h3 className="font-bold">
                    Automatically Collected Information
                  </h3>
                  <ul className="list-disc pl-8">
                    <li>
                      <span className="mr-1 font-semibold">
                        Device Information:
                      </span>
                      Device model, operating system, unique device identifiers,
                      and network information.
                    </li>
                    <li>
                      <span className="mr-1 font-semibold">Usage Data:</span>
                      App interaction, feature usage, session duration, and
                      error logs.
                    </li>
                    <li>
                      <span className="mr-1 font-semibold">Location Data:</span>
                      GPS data or approximate location derived from your IP
                      address, where enabled.
                    </li>
                    <li>
                      <span className="mr-1 font-semibold">
                        Cookies and Similar Technologies:
                      </span>
                      Information about your browsing behavior, preferences, and
                      device settings.
                    </li>
                  </ul>
                </li>
                <li>
                  <h3 className="font-bold">Third-Party Information</h3>
                  <ul className="list-disc pl-8">
                    <li>
                      Information from integrated platforms such as Google,
                      Facebook, or Apple if you choose to log in or link
                      accounts.
                    </li>
                  </ul>
                </li>
              </ol>
            </li>
            <li>
              <h2 className="text-xl font-bold">How We Use Your Information</h2>
              <p className="pt-2">We use your information to:</p>
              <ul className="list-disc pl-8 pt-2">
                <li>
                  Provide, personalize, and improve Casa’s features and
                  services.
                </li>
                <li>
                  Process transactions and manage payment-related disputes.
                </li>
                <li>
                  Deliver targeted marketing, recommendations, and promotions.
                </li>
                <li>
                  Ensure security and detect fraudulent or unauthorized
                  activities.
                </li>
                <li>
                  Comply with legal obligations and enforce our terms of
                  service.
                </li>
                <li>Conduct analytics and improve the user experience.</li>
              </ul>
            </li>
            <li>
              <h2 className="text-xl font-bold">
                How We Share Your Information
              </h2>
              <ol className="list-lowerAlpha flex flex-col gap-4 py-2 pl-4">
                <li>
                  <h3 className="font-bold">With Your Consent:</h3>
                  <ul className="list-disc pl-8">
                    <li>
                      We may share your information with third parties when you
                      consent to such sharing.
                    </li>
                  </ul>
                </li>
                <li>
                  <h3 className="font-bold">With Service Providers:</h3>
                  <ul className="list-disc pl-8">
                    <li>
                      Payment processors, cloud storage providers, and analytics
                      partners who help us deliver and improve our services.
                    </li>
                  </ul>
                </li>
                <li>
                  <h3 className="font-bold">Legal Compliance:</h3>
                  <ul className="list-disc pl-8">
                    <li>
                      In response to legal requests, such as subpoenas or court
                      orders.
                    </li>
                    <li>
                      To protect our rights, property, or safety, or that of our
                      users or the public.
                    </li>
                  </ul>
                </li>
                <li>
                  <h3 className="font-bold">Business Transfers:</h3>
                  <ul className="list-disc pl-8">
                    <li>
                      In connection with mergers, acquisitions, or asset sales.
                    </li>
                  </ul>
                </li>
              </ol>
            </li>
            <li>
              <h2 className="text-xl font-bold">Data Access and Permissions</h2>
              <ol className="list-lowerAlpha flex flex-col gap-4 py-2 pl-4">
                <li>
                  <h3 className="font-bold">Device Permissions:</h3>
                  <p className="pt-2">
                    Casa may request access to the following:
                  </p>
                  <ul className="list-disc pl-8 pt-2">
                    <li>
                      <span className="font-semibold">Camera and Photos: </span>
                      For uploading profile pictures, product listings, or
                      content.
                    </li>
                    <li>
                      <span className="font-semibold">Location Services: </span>
                      To provide localized recommendations and features.
                    </li>
                    <li>
                      <span className="font-semibold">Storage: </span>To save
                      and retrieve app-related files and data.
                    </li>
                    <li>
                      <span className="font-semibold">Contacts: </span>To find
                      and connect with friends (optional).
                    </li>
                  </ul>
                </li>
                <li>
                  <h3 className="font-bold">Data Collection Practices:</h3>
                  <p>
                    We ensure all data collected is secure and compliant with
                    applicable laws, including GDPR and CCPA.
                  </p>
                </li>
              </ol>
            </li>
            <li>
              <h2 className="text-xl font-bold">Your Rights</h2>
              <ol className="list-lowerAlpha flex flex-col gap-4 py-2 pl-4">
                <li>
                  <h3 className="font-bold">Access and Portability:</h3>
                  <ul className="list-disc pl-8">
                    <li>Request access to or a copy of your data.</li>
                  </ul>
                </li>
                <li>
                  <h3 className="font-bold">Correction:</h3>
                  <ul className="list-disc pl-8">
                    <li>Update or correct inaccurate or incomplete data.</li>
                  </ul>
                </li>
                <li>
                  <h3 className="font-bold">Deletion:</h3>
                  <ul className="list-disc pl-8">
                    <li>
                      Request deletion of your account and associated data,
                      subject to legal obligations.
                    </li>
                  </ul>
                </li>
                <li>
                  <h3 className="font-bold">Opt-Out:</h3>
                  <ul className="list-disc pl-8">
                    <li>
                      Opt-out of targeted ads, marketing communications, or
                      specific data processing activities.
                    </li>
                  </ul>
                </li>
              </ol>
              <p>
                To exercise these rights, contact us at
                <span className="ml-1 font-semibold">admin@casashop.in</span>.
              </p>
            </li>
            <li>
              <h2 className="text-xl font-bold">Data Retention and Security</h2>
              <ol className="list-lowerAlpha flex flex-col gap-4 py-2 pl-4">
                <li>
                  <h3 className="font-bold">Retention:</h3>
                  <p>
                    We retain your data as long as necessary for the purposes
                    described in this Privacy Policy unless a longer retention
                    period is required by law.
                  </p>
                </li>
                <li>
                  <h3 className="font-bold">Security Measures:</h3>
                  <p>
                    We implement industry-standard safeguards to protect your
                    data, including encryption, firewalls, and access controls.
                  </p>
                </li>
              </ol>
            </li>
            <li>
              <h2 className="text-xl font-bold">Limitation of Liability</h2>
              <p className="pt-2">
                Casa, its founders (including Derek Almeida and Steve Vora),
                officers, employees, and affiliates are not liable for:
              </p>
              <ul className="list-disc py-2 pl-8">
                <li>
                  Losses or damages resulting from unauthorized access to your
                  account or data.
                </li>
                <li>Misuse of the platform by other users.</li>
                <li>Third-party service disruptions or failures.</li>
              </ul>
            </li>
            <li>
              <h2 className="text-xl font-bold">Children&apos;s Privacy</h2>
              <p className="pt-2">
                Casa is not intended for individuals under the age of 13 (or the
                minimum legal age in your jurisdiction). We do not knowingly
                collect personal information from children without parental
                consent.
              </p>
            </li>
            <li>
              <h2 className="text-xl font-bold">International Users</h2>
              <p className="pt-2">
                If you access Casa from outside India, your information may be
                transferred to and processed in India or other countries with
                different data protection laws. By using Casa, you consent to
                these transfers.
              </p>
            </li>
            <li>
              <h2 className="text-xl font-bold">
                Changes to This Privacy Policy
              </h2>
              <p className="pt-2">
                We may update this Privacy Policy periodically. Material changes
                will be communicated through the App or via email.
              </p>
            </li>
            <li>
              <h2 className="text-xl font-bold">Contact Us</h2>
              <p className="pt-2">
                If you have any questions or concerns about this Privacy Policy,
                please contact us at:
              </p>
              <ul className="list-disc py-2 pl-8">
                <li>
                  <span className="mr-1 font-semibold">Company Name:</span>
                  Backitup Finance Private Limited
                </li>
                <li>
                  <span className="mr-1 font-semibold">Email:</span>
                  admin@casashop.in
                </li>
                <li>
                  <span className="mr-1 font-semibold">Mailing Address:</span>C
                  003, Rajashree Society, Dewoolwadi Tarun Bharat, Sahar P & T
                  Colony, Mumbai, Maharashtra, India, 400099
                </li>
              </ul>
            </li>
          </ol>

          <p>
            By using Casa, you acknowledge that you have read and understood
            this Privacy Policy and agree to its terms.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Privacy;
