import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-heading-1 text-primary mb-4">Privacy Policy</h1>
        <p className="text-body-regular text-gray-600 mb-8">
          Effective Date: September 1, 2025
        </p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-heading-3 text-primary mb-4">Introduction</h2>
            <p className="text-body-regular text-gray-700 mb-4 leading-relaxed">
              <strong>Appetec, Inc.</strong> ("Appetec," "we," "us," or "our") values your privacy. This Privacy Policy explains what 
              information we collect, how we use it, and your rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-heading-3 text-primary mb-4">Information We Collect</h2>
            
            <h3 className="text-heading-4 text-primary mb-3 mt-6">Personal Information</h3>
            <p className="text-body-regular text-gray-700 mb-4 leading-relaxed">
              We collect personal information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-body-regular text-gray-700">
              <li>Name</li>
              <li>Date of birth</li>
              <li>Gender</li>
              <li>Email address</li>
              <li>Height</li>
              <li>Weight</li>
            </ul>

            <h3 className="text-heading-4 text-primary mb-3 mt-6">Wellness Data</h3>
            <p className="text-body-regular text-gray-700 mb-4 leading-relaxed">
              We collect user-entered logs on:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-body-regular text-gray-700">
              <li>Diet and nutrition</li>
              <li>Physical activity</li>
              <li>Stress levels</li>
              <li>Gut health</li>
              <li>Health and wellness goals</li>
            </ul>

            <h3 className="text-heading-4 text-primary mb-3 mt-6">Technical Data</h3>
            <p className="text-body-regular text-gray-700 mb-4 leading-relaxed">
              We automatically collect certain technical information, including:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-body-regular text-gray-700">
              <li>Device type</li>
              <li>Operating system</li>
              <li>App usage patterns</li>
              <li>Crash reports</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-heading-3 text-primary mb-4">How We Use Information</h2>
            <p className="text-body-regular text-gray-700 mb-4 leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-body-regular text-gray-700">
              <li>Deliver and personalize app services</li>
              <li>Improve app performance and user experience</li>
              <li>Support internal quality improvement and analytics</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-heading-3 text-primary mb-4">Sharing of Information</h2>
            <p className="text-body-regular text-gray-700 mb-4 leading-relaxed">
              <strong>Identifiable data is never sold or shared with third parties.</strong> We protect all identifiable information and 
              will not disclose or sell it to third parties without a person's permission.
            </p>
            <p className="text-body-regular text-gray-700 mb-4 leading-relaxed">
              De-identified or aggregated data may be used internally for app improvement, quality monitoring, and research purposes. 
              This data may be retained for up to 10 years for quality improvement and research purposes.
            </p>
            <p className="text-body-regular text-gray-700 mb-4 leading-relaxed">
              <strong>Your consent does not extend to marketing use of your identifiable information.</strong> Identifiable information 
              will never be used for advertising or sold to third parties. Consent is limited strictly to de-identified and aggregated 
              data for quality improvement and app functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-heading-3 text-primary mb-4">Data Retention</h2>
            <p className="text-body-regular text-gray-700 mb-4 leading-relaxed">
              <strong>Identifiable data</strong> is retained only as long as needed to provide services. When you delete your account, 
              identifiable data will be removed from active systems within 30 days.
            </p>
            <p className="text-body-regular text-gray-700 mb-4 leading-relaxed">
              <strong>De-identified/aggregated data</strong> may be stored for up to 10 years for quality improvement and research purposes. 
              You may withdraw consent at any time by deleting your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-heading-3 text-primary mb-4">Security</h2>
            <p className="text-body-regular text-gray-700 mb-4 leading-relaxed">
              We apply administrative, technical, and physical safeguards to protect data, including encryption in transit and at rest. 
              However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-heading-3 text-primary mb-4">Your Rights</h2>
            <p className="text-body-regular text-gray-700 mb-4 leading-relaxed">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-body-regular text-gray-700">
              <li><strong>Request access</strong> to your personal data</li>
              <li><strong>Request correction</strong> of inaccurate or incomplete data</li>
              <li><strong>Request deletion</strong> of your personal data</li>
              <li><strong>Delete your account</strong> anytime—identifiable data will be removed from active systems within 30 days</li>
              <li><strong>Withdraw consent</strong> for use of de-identified data by deleting your account</li>
            </ul>
            <p className="text-body-regular text-gray-700 mb-4 leading-relaxed">
              To exercise these rights, please contact us at <a href="mailto:privacy@appetec.com" className="link">privacy@appetec.com</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-heading-3 text-primary mb-4">Consent to Use of De-Identified Data</h2>
            <p className="text-body-regular text-gray-700 mb-4 leading-relaxed">
              By creating an account, you authorize Appetec to use your de-identified data (e.g., age, gender, goals, activity logs, 
              wellness entries) for:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-body-regular text-gray-700">
              <li>App performance improvements</li>
              <li>User experience enhancements</li>
              <li>Internal quality monitoring</li>
              <li>Research and quality improvement purposes</li>
            </ul>
            <p className="text-body-regular text-gray-700 mb-4 leading-relaxed">
              <strong>Limits of Consent:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-body-regular text-gray-700">
              <li>Identifiable data is protected and not sold</li>
              <li>Consent covers only de-identified and aggregated data</li>
              <li>You may withdraw consent at any time by deleting your account</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-heading-3 text-primary mb-4">Children's Privacy</h2>
            <p className="text-body-regular text-gray-700 mb-4 leading-relaxed">
              The Appetec Wellness App is not directed to children under 13, and we do not knowingly collect personal information from 
              children under 13. If you are between the ages of 13 and 18, you may use the app only with the consent of a parent or guardian.
            </p>
            <p className="text-body-regular text-gray-700 mb-4 leading-relaxed">
              In accordance with the U.S. Children's Online Privacy Protection Act, if we receive actual knowledge that anyone under 
              the age of 13 has provided personal information to us without the requisite and verifiable parental consent, we will 
              delete that information from the Services as quickly as is reasonably practical.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-heading-3 text-primary mb-4">International Users and Data Transfers</h2>
            <p className="text-body-regular text-gray-700 mb-4 leading-relaxed">
              If you access the app from outside the United States, your information may be transferred to, stored, and processed in the 
              United States. By using the app, you consent to such transfer in compliance with applicable law.
            </p>
            <p className="text-body-regular text-gray-700 mb-4 leading-relaxed">
              Please be advised the Services are hosted in the United States. If you access the Services from any other region of the 
              world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable 
              laws in the United States, then through your continued use of the Services, you are transferring your data to the United 
              States, and you expressly consent to have your data transferred to and processed in the United States.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-heading-3 text-primary mb-4">State Privacy Rights</h2>
            <p className="text-body-regular text-gray-700 mb-4 leading-relaxed">
              Many states have specific privacy laws. To exercise these rights, please contact us at <a href="mailto:privacy@appetec.com" className="link">privacy@appetec.com</a>.
            </p>
            <p className="text-body-regular text-gray-700 mb-4 leading-relaxed">
              <strong>California Users and Residents:</strong> If any complaint with us is not satisfactorily resolved, you can contact 
              the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing 
              at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834 or by telephone at (800) 952-5210 or (916) 445-1254.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-heading-3 text-primary mb-4">Changes to This Privacy Policy</h2>
            <p className="text-body-regular text-gray-700 mb-4 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy 
              on this page and updating the "Effective Date." You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-heading-3 text-primary mb-4">Contact Us</h2>
            <p className="text-body-regular text-gray-700 mb-4 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="text-body-regular text-gray-700 mb-2"><strong>Appetec, Inc.</strong></p>
              <p className="text-body-regular text-gray-700 mb-2">Email: <a href="mailto:privacy@appetec.com" className="link">privacy@appetec.com</a></p>
              <p className="text-body-regular text-gray-700 mb-2">4863 Rivoli Drive</p>
              <p className="text-body-regular text-gray-700">Macon, GA 31210</p>
            </div>
            <p className="text-body-regular text-gray-700 mb-4 leading-relaxed">
              For general inquiries, you can also contact us through the app's support feature.
            </p>
          </section>

          <section className="mb-8 bg-primary-very-light p-6 rounded-lg">
            <h2 className="text-heading-3 text-primary mb-4">Related Policies</h2>
            <p className="text-body-regular text-gray-700 mb-4 leading-relaxed">
              This Privacy Policy should be read in conjunction with:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-body-regular text-gray-700">
              <li><Link to="/terms" className="link">Terms and Conditions of Use</Link></li>
              <li>Data & Consent Policy (available in the app)</li>
              <li>Arbitration and Class Action Waiver Policy (available in the app)</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
