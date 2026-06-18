import Navbar from '@/pages/home/components/Navbar';
import Footer from '@/pages/home/components/Footer';
import { Link } from 'react-router-dom';

export default function TermsConditionsPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />

      <main>
        {/* Page Header */}
        <section className="bg-[#fafafa] border-b border-gray-100">
          <div className="w-full px-6 lg:px-10 max-w-[900px] mx-auto py-8 md:py-10">
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Legal</p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Terms &amp; Conditions
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
                Welcome to PROITKEYS (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your access to and use of our website, training programs, career support services, and all related content and materials (collectively, the &ldquo;Services&rdquo;). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not use our Services.
              </p>
            </div>

            {/* 1. Definitions */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Definitions</h2>
              <ul className="list-disc pl-5 space-y-2 leading-relaxed">
                <li><strong>&ldquo;User,&rdquo; &ldquo;you,&rdquo; &ldquo;your&rdquo;</strong> refers to any individual who accesses or uses our Services.</li>
                <li><strong>&ldquo;Services&rdquo;</strong> refers to all training programs, courses, career placement support, corporate training solutions, consultation services, and the website itself.</li>
                <li><strong>&ldquo;Enrollment&rdquo;</strong> refers to the registration and payment process for accessing a specific training program or course.</li>
                <li><strong>&ldquo;Content&rdquo;</strong> refers to all materials, including but not limited to course videos, documentation, exercises, assessments, and any other educational resources provided through our Services.</li>
              </ul>
            </div>

            {/* 2. Eligibility */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Eligibility</h2>
              <p className="leading-relaxed">
                You must be at least 18 years of age to use our Services independently. If you are under 18, you may only use our Services under the supervision of a parent or legal guardian who agrees to these Terms on your behalf. By using our Services, you represent and warrant that you meet the eligibility requirements and that all information you provide is accurate, current, and complete.
              </p>
            </div>

            {/* 3. Account Registration */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Account Registration</h2>
              <p className="leading-relaxed">
                To access certain features of our Services, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorised access or use of your account. We reserve the right to suspend or terminate accounts that provide false, incomplete, or misleading information.
              </p>
            </div>

            {/* 4. Enrollment and Payments */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Enrollment and Payments</h2>
              <p className="leading-relaxed mb-3">
                Enrollment in our training programs is subject to availability and our acceptance of your registration. All fees for our Services are listed on our website or communicated during the enrolment process and are subject to change without notice.
              </p>
              <ul className="list-disc pl-5 space-y-2 leading-relaxed">
                <li>All payments must be made in full at the time of registration unless a payment plan has been explicitly agreed upon in writing.</li>
                <li>Prices are listed in US Dollars (USD) unless otherwise stated, and you are responsible for any applicable taxes, duties, or transaction fees.</li>
                <li>We use third-party payment processors to handle transactions. We do not store your full payment card details on our servers.</li>
                <li>PROITKEYS reserves the right to modify pricing at any time. Existing enrolments will not be affected by price changes.</li>
              </ul>
            </div>

            {/* 5. Refund and Cancellation Policy */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Refund and Cancellation Policy</h2>
              <p className="leading-relaxed mb-3">
                We are committed to providing high-quality training and career support. Our refund policy is as follows:
              </p>
              <ul className="list-disc pl-5 space-y-2 leading-relaxed">
                <li>You may request a full refund within 7 calendar days of the course start date, provided you have not accessed more than 20% of the course content.</li>
                <li>After 7 days from the course start date, or if more than 20% of content has been accessed, refunds are generally not available except in exceptional circumstances at our sole discretion.</li>
                <li>For one-on-one mentorship or personalised career support sessions, cancellations must be made at least 24 hours before the scheduled session to be eligible for rescheduling or refund.</li>
                <li>Corporate training agreements are governed by the specific terms of the contract signed with the corporate client.</li>
              </ul>
              <p className="leading-relaxed mt-3">
                To request a refund, please contact us at proitkeys@gmail.com with your enrollment details. Refunds, if approved, will be processed within 7-14 business days and credited to the original payment method.
              </p>
            </div>

            {/* 6. Intellectual Property */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Intellectual Property</h2>
              <p className="leading-relaxed mb-3">
                All content provided through our Services, including but not limited to course materials, videos, presentations, documents, assessments, code samples, graphics, logos, trademarks, and the PROITKEYS brand name, is the exclusive intellectual property of PROITKEYS or its licensors and is protected by copyright, trademark, and other intellectual property laws.
              </p>
              <ul className="list-disc pl-5 space-y-2 leading-relaxed">
                <li>You are granted a limited, non-exclusive, non-transferable, revocable license to access and use the Content solely for your personal, non-commercial learning purposes.</li>
                <li>You may not reproduce, distribute, modify, create derivative works from, publicly display, publicly perform, republish, download, store, or transmit any Content without our prior written consent.</li>
                <li>You may not use any Content to train, develop, or improve any artificial intelligence model, large language model, or machine learning system without our explicit written permission.</li>
                <li>Recording, screen-capturing, or downloading course videos and materials using any tools, extensions, or methods is strictly prohibited.</li>
              </ul>
            </div>

            {/* 7. User Conduct */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">7. User Conduct</h2>
              <p className="leading-relaxed mb-3">When using our Services, you agree not to:</p>
              <ul className="list-disc pl-5 space-y-2 leading-relaxed">
                <li>Use the Services for any unlawful purpose or in violation of any applicable laws or regulations</li>
                <li>Share your account credentials with others or allow unauthorised access to the Services</li>
                <li>Upload, post, or transmit any content that is defamatory, obscene, harassing, hateful, or otherwise objectionable</li>
                <li>Attempt to gain unauthorised access to our systems, servers, or networks</li>
                <li>Interfere with or disrupt the operation of the Services or the servers and networks connected to them</li>
                <li>Use any automated system, including bots, scrapers, or spiders, to access the Services without our permission</li>
                <li>Impersonate any person or entity or falsely state or misrepresent your affiliation with a person or entity</li>
              </ul>
            </div>

            {/* 8. Limitation of Liability */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Limitation of Liability</h2>
              <p className="leading-relaxed">
                To the fullest extent permitted by applicable law, PROITKEYS and its directors, employees, instructors, partners, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, arising out of or in connection with your use of or inability to use our Services.
              </p>
              <p className="leading-relaxed mt-3">
                PROITKEYS makes no guarantees regarding employment outcomes, job placements, salary increases, or career advancement as a result of completing our training programs. While we provide career support and placement assistance, individual results depend on a variety of factors including market conditions, individual effort, prior experience, and interview performance.
              </p>
              <p className="leading-relaxed mt-3">
                Our total liability for any claims arising from your use of the Services shall not exceed the total amount paid by you to PROITKEYS in the 12 months preceding the claim, or INR 10,000, whichever is less.
              </p>
            </div>

            {/* 9. Disclaimer of Warranties */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Disclaimer of Warranties</h2>
              <p className="leading-relaxed">
                Our Services are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without any warranties of any kind, either express or implied. We do not warrant that the Services will be uninterrupted, error-free, secure, or free from viruses or other harmful components. We disclaim all warranties, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>
            </div>

            {/* 10. Indemnification */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Indemnification</h2>
              <p className="leading-relaxed">
                You agree to indemnify, defend, and hold harmless PROITKEYS and its officers, directors, employees, instructors, and affiliates from and against any claims, liabilities, damages, losses, costs, and expenses (including reasonable legal fees) arising out of or related to your violation of these Terms, your use of the Services, or your infringement of any third-party rights.
              </p>
            </div>

            {/* 11. Third-Party Services */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">11. Third-Party Services</h2>
              <p className="leading-relaxed">
                Our Services may integrate with or link to third-party websites, applications, or services that are not owned or controlled by PROITKEYS. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party services. You access and use third-party services at your own risk.
              </p>
            </div>

            {/* 12. Termination */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">12. Termination</h2>
              <p className="leading-relaxed">
                We reserve the right to suspend or terminate your access to our Services at any time, with or without cause and with or without notice, including but not limited to instances where we believe you have violated these Terms. Upon termination, your right to use the Services will immediately cease, and you must destroy any copies of Content in your possession.
              </p>
            </div>

            {/* 13. Governing Law and Disputes */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">13. Governing Law and Disputes</h2>
              <p className="leading-relaxed">
                These Terms shall be governed by and construed in accordance with applicable laws in the United States, without regard to conflict of law principles. Any dispute arising out of or relating to these Terms or the Services shall be handled in the United States.
              </p>
              <p className="leading-relaxed mt-3">
                Before initiating formal legal proceedings, you agree to first attempt to resolve any dispute informally by contacting us at proitkeys@gmail.com. We will make reasonable efforts to resolve the dispute within 30 days.
              </p>
            </div>

            {/* 14. Changes to Terms */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">14. Changes to These Terms</h2>
              <p className="leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on this page and updating the &ldquo;Last updated&rdquo; date. Your continued use of the Services after any changes constitutes your acceptance of the revised Terms. We encourage you to review these Terms periodically.
              </p>
            </div>

            {/* 15. Contact */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">15. Contact Information</h2>
              <p className="leading-relaxed mb-3">
                If you have any questions, concerns, or feedback regarding these Terms, please reach out:
              </p>
              <ul className="list-none space-y-2 leading-relaxed">
                <li><strong>Email:</strong> proitkeys@gmail.com</li>
                <li><strong>Phone (US):</strong> +1 (531) 395 4129</li>
                <li><strong>Phone / WhatsApp:</strong> +91 94928 76779</li>
                <li><strong>WhatsApp:</strong> +91 94928 76779</li>
                <li><strong>Website:</strong> Visit our <Link to="/contact" className="text-[#f15a24] hover:underline">contact page</Link></li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
