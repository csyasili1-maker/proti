import Navbar from '@/pages/home/components/Navbar';
import Footer from '@/pages/home/components/Footer';
import { Link } from 'react-router-dom';
import { supportEmail } from '@/config/contact';

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />

      <main>
        {/* Page Header */}
        <section className="bg-[#fafafa] border-b border-gray-100">
          <div className="w-full px-6 lg:px-10 max-w-[900px] mx-auto py-8 md:py-10">
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Legal</p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Privacy Policy
            </h1>
            <p className="text-sm text-gray-400 mt-2">Last updated: May 29, 2026</p>
          </div>
        </section>

        {/* Content */}
        <section className="w-full px-6 lg:px-10 max-w-[900px] mx-auto py-8 md:py-12">
          <div className="prose prose-sm md:prose-base max-w-none text-gray-700 space-y-8">
            {/* Intro */}
            <div>
              <p className="leading-relaxed">
                PROITKEYS (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting the privacy of individuals who visit our website, enroll in our training programs, or use our career support services. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information.
              </p>
            </div>

            {/* 1. Information We Collect */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Information We Collect</h2>
              <p className="leading-relaxed mb-3">We collect information that you voluntarily provide when you:</p>
              <ul className="list-disc pl-5 space-y-2 leading-relaxed">
                <li>Register for a course or training program</li>
                <li>Submit an enquiry, consultation request, or contact form</li>
                <li>Subscribe to our newsletter or download resources</li>
                <li>Apply for career placement support or corporate training</li>
                <li>Communicate with us via phone, email, WhatsApp, or social media</li>
              </ul>
              <p className="leading-relaxed mt-3">
                This information may include your full name, email address, phone number, mailing address, educational background, professional experience, payment details, and any other details you choose to provide.
              </p>
              <p className="leading-relaxed mt-3">
                We also automatically collect certain technical data when you visit our website, including your IP address, browser type, device information, pages visited, referring URLs, and timestamps. This data is collected through cookies, web beacons, and similar tracking technologies.
              </p>
            </div>

            {/* 2. How We Use Your Information */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">2. How We Use Your Information</h2>
              <p className="leading-relaxed mb-3">We use the information we collect to:</p>
              <ul className="list-disc pl-5 space-y-2 leading-relaxed">
                <li>Process course enrollments, payments, and deliver training services</li>
                <li>Respond to your enquiries, consultation requests, and customer support needs</li>
                <li>Send program updates, career resources, newsletters, and promotional materials (with your consent)</li>
                <li>Personalise your learning experience and recommend relevant programs</li>
                <li>Improve our website, services, and training curriculum</li>
                <li>Comply with legal obligations and enforce our Terms &amp; Conditions</li>
                <li>Protect against fraudulent, unauthorised, or illegal activity</li>
              </ul>
            </div>

            {/* 3. Cookies and Tracking */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Cookies and Tracking Technologies</h2>
              <p className="leading-relaxed">
                We use cookies and similar tracking technologies to enhance your browsing experience, analyse website traffic, and deliver targeted advertisements. Cookies are small text files stored on your device that help us remember your preferences and understand how you interact with our website.
              </p>
              <p className="leading-relaxed mt-3">
                You can control cookies through your browser settings. Most browsers allow you to block or delete cookies; however, doing so may affect the functionality of our website. We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device for a set period).
              </p>
              <p className="leading-relaxed mt-3">
                We may use third-party analytics services, such as Google Analytics, to collect standard internet log information and visitor behaviour patterns. These services use their own cookies and have their own privacy policies.
              </p>
            </div>

            {/* 4. Information Sharing */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">4. How We Share Your Information</h2>
              <p className="leading-relaxed mb-3">
                We do not sell, rent, or trade your personal information to third parties. We may share your information in the following limited circumstances:
              </p>
              <ul className="list-disc pl-5 space-y-2 leading-relaxed">
                <li>
                  <strong>Service Providers:</strong> With trusted third-party vendors who assist us in operating our website, processing payments, delivering email communications, and providing customer support — all bound by confidentiality agreements.
                </li>
                <li>
                  <strong>Legal Compliance:</strong> When required by law, court order, or governmental regulation, or to protect the rights, property, or safety of PROITKEYS, our users, or the public.
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with a merger, acquisition, reorganisation, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.
                </li>
                <li>
                  <strong>With Your Consent:</strong> We may share your information for any other purpose with your explicit consent.
                </li>
              </ul>
            </div>

            {/* 5. Data Security */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Data Security</h2>
              <p className="leading-relaxed">
                We implement appropriate technical and organisational security measures to protect your personal information against accidental or unlawful destruction, loss, alteration, unauthorised disclosure, or access. These measures include encryption of data in transit (SSL/TLS), secure server infrastructure, access controls, and regular security assessments.
              </p>
              <p className="leading-relaxed mt-3">
                However, no method of electronic storage or transmission over the internet is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </div>

            {/* 6. Data Retention */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Data Retention</h2>
              <p className="leading-relaxed">
                We retain your personal information only for as long as necessary to fulfil the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When your information is no longer needed, we will securely delete or anonymise it.
              </p>
            </div>

            {/* 7. Your Rights */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Your Rights</h2>
              <p className="leading-relaxed mb-3">Depending on your jurisdiction, you may have the following rights regarding your personal data:</p>
              <ul className="list-disc pl-5 space-y-2 leading-relaxed">
                <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
                <li><strong>Correction:</strong> Request that we correct inaccurate or incomplete information.</li>
                <li><strong>Deletion:</strong> Request that we delete your personal data, subject to legal obligations.</li>
                <li><strong>Objection:</strong> Object to the processing of your personal data for direct marketing or other purposes.</li>
                <li><strong>Portability:</strong> Request a copy of your data in a structured, machine-readable format.</li>
                <li><strong>Withdraw Consent:</strong> Withdraw your consent at any time where we rely on your consent for processing.</li>
              </ul>
              <p className="leading-relaxed mt-3">
                To exercise any of these rights, please contact us using the details in Section 9. We will respond to your request within the timeframe required by applicable law.
              </p>
            </div>

            {/* 8. Third-Party Links */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Third-Party Links</h2>
              <p className="leading-relaxed">
                Our website may contain links to third-party websites, such as payment processors, social media platforms, or partner sites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.
              </p>
            </div>

            {/* 9. Contact */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Contact Us</h2>
              <p className="leading-relaxed mb-3">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <ul className="list-none space-y-2 leading-relaxed">
                <li><strong>Email:</strong> <a href={`mailto:${supportEmail}`} className="text-[#f15a24] hover:underline">{supportEmail}</a></li>
                <li><strong>Phone (US):</strong> +1 (531) 395 4129</li>
                <li><strong>Phone / WhatsApp:</strong> +91 94928 76779</li>
                <li><strong>WhatsApp:</strong> +91 94928 76779</li>
                <li><strong>Website:</strong> Contact us at our <Link to="/contact" className="text-[#f15a24] hover:underline">contact page</Link></li>
              </ul>
            </div>

            {/* 10. Changes */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Changes to This Privacy Policy</h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or operational needs. We will post the revised policy on this page and update the &ldquo;Last updated&rdquo; date. We encourage you to review this policy periodically. Continued use of our services after any changes constitutes acceptance of the updated policy.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
