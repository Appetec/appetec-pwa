import { Link } from 'react-router-dom'

export default function AccountDeletion() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-heading-1 text-primary mb-4">Account Deletion Request</h1>
        <p className="text-body-regular text-gray-600 mb-8">
          Last Updated: December 24, 2024
        </p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
            <h2 className="text-heading-4 text-yellow-800 mb-3">Important Notice</h2>
            <p className="text-body-regular text-yellow-700 leading-relaxed">
              Account deletion is permanent and cannot be undone. All your personal data, health records, 
              activity logs, and app settings will be permanently deleted from our systems.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-heading-3 text-primary mb-4">How to Delete Your Account</h2>
            <p className="text-body-regular text-gray-700 mb-4 leading-relaxed">
              To comply with Apple App Store and Google Play Store policies, we provide multiple ways 
              to request account deletion:
            </p>
          </section>

          {/* <section className="mb-8">
            <h2 className="text-heading-3 text-primary mb-4">Method 1: In-App Deletion (Recommended)</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <ol className="list-decimal pl-6 space-y-3 text-body-regular text-gray-700">
                <li>Open the <strong>Appetec App</strong> on your mobile device</li>
                <li>Navigate to <strong>Settings</strong> or <strong>Profile</strong></li>
                <li>Scroll down to <strong>Account Management</strong></li>
                <li>Tap <strong>Delete Account</strong></li>
                <li>Confirm your decision by entering your password</li>
                <li>You will receive a confirmation email once the deletion is complete</li>
              </ol>
            </div>
            <p className="text-body-small text-gray-600 italic">
              ⏱️ Estimated completion time: Within 30 days
            </p>
          </section> */}

          <section className="mb-8">
            <h2 className="text-heading-3 text-primary mb-4">Method 1: Email Request</h2>
            <p className="text-body-regular text-gray-700 mb-4 leading-relaxed">
              If you cannot access the app or prefer to request deletion via email:
            </p>
            <div className="bg-primary-very-light p-6 rounded-lg mb-4">
              <p className="text-body-regular text-gray-700 mb-3">
                <strong>Send an email to:</strong> <a href="mailto:privacy@appetec.com" className="link">privacy@appetec.com</a>
              </p>
              <p className="text-body-regular text-gray-700 mb-3">
                <strong>Subject:</strong> Account Deletion Request
              </p>
              <p className="text-body-regular text-gray-700 mb-3">
                <strong>Include the following information:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-body-regular text-gray-700">
                <li>Your full name</li>
                <li>Email address associated with your account</li>
                <li>Phone number (if applicable)</li>
                <li>Reason for deletion (optional)</li>
              </ul>
            </div>
            <p className="text-body-small text-gray-600 italic mb-4">
              ⏱️ We will respond within 48-72 hours and complete the deletion within 30 days
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
              <p className="text-body-small text-blue-700">
                <strong>Note:</strong> To verify your identity, we may ask you to reply from the email 
                address registered with your account or provide additional verification.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-heading-3 text-primary mb-4">Method 2: Contact Support</h2>
            <p className="text-body-regular text-gray-700 mb-4 leading-relaxed">
              You can also contact our support team directly:
            </p>
            <div className="bg-gray-100 p-6 rounded-lg">
              <p className="text-body-regular text-gray-700 mb-3">
                <strong>Email:</strong> <a href="mailto:support@appetec.com" className="link">support@appetec.com</a>
              </p>
              <p className="text-body-regular text-gray-700 mb-3">
                <strong>Phone:</strong> +1 (555) 123-4567 (Mon-Fri, 9AM-5PM EST)
              </p>
              <p className="text-body-regular text-gray-700">
                <strong>Address:</strong><br />
                Appetec, Inc.<br />
                4863 Rivoli Drive<br />
                Macon, GA 31210
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-heading-3 text-primary mb-4">What Happens When You Delete Your Account</h2>
            
            <h3 className="text-heading-4 text-primary mb-3 mt-6">Data Deleted Immediately:</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-body-regular text-gray-700">
              <li><strong>Personal Information:</strong> Name, email, phone number, date of birth</li>
              <li><strong>Health Data:</strong> All logged meals, activities, health metrics, and wellness entries</li>
              <li><strong>Account Settings:</strong> Preferences, goals, and customizations</li>
              <li><strong>Profile Data:</strong> Photos, bio, and other profile information</li>
              <li><strong>App Access:</strong> You will be immediately logged out and unable to access the app</li>
            </ul>

            <h3 className="text-heading-4 text-primary mb-3 mt-6">Data Retained (De-identified):</h3>
            <p className="text-body-regular text-gray-700 mb-4 leading-relaxed">
              As outlined in our <Link to="/privacy" className="link">Privacy Policy</Link>, some de-identified 
              and aggregated data may be retained for up to 10 years for quality improvement and research purposes. 
              This data cannot be traced back to you.
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-body-regular text-gray-700">
              <li>Anonymized usage statistics</li>
              <li>De-identified health trends (age group, gender, etc.)</li>
              <li>Aggregated app performance metrics</li>
            </ul>

            <h3 className="text-heading-4 text-primary mb-3 mt-6">Legal Requirements:</h3>
            <p className="text-body-regular text-gray-700 mb-4 leading-relaxed">
              We may retain certain information if required by law, such as:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-body-regular text-gray-700">
              <li>Transaction records for tax or accounting purposes</li>
              <li>Records needed to comply with legal obligations</li>
              <li>Information required to resolve disputes or enforce agreements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-heading-3 text-primary mb-4">Deletion Timeline</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h4 className="text-heading-5 text-primary mb-1">Request Received</h4>
                    <p className="text-body-regular text-gray-700">
                      We acknowledge your request within 48-72 hours
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h4 className="text-heading-5 text-primary mb-1">Identity Verification</h4>
                    <p className="text-body-regular text-gray-700">
                      We verify your identity to protect your account (1-3 business days)
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h4 className="text-heading-5 text-primary mb-1">Account Deletion</h4>
                    <p className="text-body-regular text-gray-700">
                      Your account and personal data are deleted from active systems (within 30 days)
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                    4
                  </div>
                  <div>
                    <h4 className="text-heading-5 text-primary mb-1">Confirmation</h4>
                    <p className="text-body-regular text-gray-700">
                      You receive a confirmation email when deletion is complete
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-heading-3 text-primary mb-4">Cancellation Grace Period</h2>
            <p className="text-body-regular text-gray-700 mb-4 leading-relaxed">
              After submitting your deletion request, you have <strong>7 days</strong> to cancel the request 
              and keep your account. After this period, the deletion process becomes irreversible.
            </p>
            <p className="text-body-regular text-gray-700 mb-4 leading-relaxed">
              To cancel your deletion request, contact us immediately at{' '}
              <a href="mailto:privacy@appetec.com" className="link">privacy@appetec.com</a> with the subject 
              "Cancel Account Deletion."
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-heading-3 text-primary mb-4">Alternative: Temporary Account Deactivation</h2>
            <p className="text-body-regular text-gray-700 mb-4 leading-relaxed">
              If you're not sure about permanently deleting your account, consider temporarily deactivating it instead:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-body-regular text-gray-700">
              <li>Your data will be preserved</li>
              <li>Your account will be hidden from other users</li>
              <li>You can reactivate anytime by logging back in</li>
              <li>Available in the app under Settings → Account → Deactivate Account</li>
            </ul>
          </section>

          <section className="mb-8 bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
            <h2 className="text-heading-4 text-red-800 mb-3">Before You Delete</h2>
            <p className="text-body-regular text-red-700 mb-3 leading-relaxed">
              Please consider the following before deleting your account:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-body-regular text-red-700">
              <li><strong>All data will be lost:</strong> There is no way to recover your data after deletion</li>
              <li><strong>Active subscriptions:</strong> Cancel any active subscriptions before deleting your account</li>
              <li><strong>Connected devices:</strong> Disconnect any linked health devices or apps</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-heading-3 text-primary mb-4">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-primary-light pl-4">
                <h4 className="text-heading-5 text-primary mb-2">
                  Can I recover my account after deletion?
                </h4>
                <p className="text-body-regular text-gray-700">
                  No, account deletion is permanent and cannot be undone. You will need to create a 
                  new account if you wish to use Appetec again.
                </p>
              </div>

              <div className="border-l-4 border-primary-light pl-4">
                <h4 className="text-heading-5 text-primary mb-2">
                  How long does the deletion process take?
                </h4>
                <p className="text-body-regular text-gray-700">
                  Your account and personal data will be deleted from active systems within 30 days 
                  of your confirmed request.
                </p>
              </div>

              <div className="border-l-4 border-primary-light pl-4">
                <h4 className="text-heading-5 text-primary mb-2">
                  Will I get a refund if I have an active subscription?
                </h4>
                <p className="text-body-regular text-gray-700">
                  Deleting your account does not automatically cancel subscriptions or trigger refunds. 
                  Please cancel your subscription through the App Store or Google Play Store before 
                  deleting your account.
                </p>
              </div>

              <div className="border-l-4 border-primary-light pl-4">
                <h4 className="text-heading-5 text-primary mb-2">
                  What happens to my health data synced from Apple Health or Google Fit?
                </h4>
                <p className="text-body-regular text-gray-700">
                  All health data stored in Appetec will be deleted. However, the original data in 
                  Apple Health or Google Fit remains unchanged.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-heading-3 text-primary mb-4">Need Help?</h2>
            <p className="text-body-regular text-gray-700 mb-4 leading-relaxed">
              If you have any questions or encounter issues with account deletion, please contact us:
            </p>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-body-regular text-gray-700 mb-2">
                <strong>Email:</strong> <a href="mailto:privacy@appetec.com" className="link">privacy@appetec.com</a>
              </p>
              <p className="text-body-regular text-gray-700 mb-2">
                <strong>Support:</strong> <a href="mailto:support@appetec.com" className="link">support@appetec.com</a>
              </p>
              <p className="text-body-regular text-gray-700">
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
            </div>
          </section>

          <section className="mb-8 bg-primary-very-light p-6 rounded-lg">
            <h2 className="text-heading-3 text-primary mb-4">Related Policies</h2>
            <ul className="list-disc pl-6 space-y-2 text-body-regular text-gray-700">
              <li><Link to="/privacy" className="link">Privacy Policy (includes Arbitration & Class Action Waiver)</Link></li>
              <li><Link to="/terms" className="link">Terms and Conditions</Link></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
