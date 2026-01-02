import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-primary-very-light to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-heading-1 text-primary mb-6">
            Welcome to Appetec
          </h1>
          <p className="text-body-large text-gray-700 mb-8 leading-loose">
            Your comprehensive health and wellness companion. Track your nutrition, monitor your mood, 
            manage your sleep, and achieve your wellness goals all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/terms" className="btn-primary">
              View Terms & Conditions
            </Link>
            <Link to="/privacy" className="btn-outline">
              Privacy Policy
            </Link>
            <Link to="/account-deletion" className="btn-outline">
              Delete Account
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-heading-2 text-center text-primary mb-12">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card">
            <div className="w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-heading-4 text-primary mb-3">Nutrition Tracking</h3>
            <p className="text-body-regular text-gray-600">
              Log your meals, track nutrients, and monitor your daily intake to maintain a balanced diet.
            </p>
          </div>

          <div className="card">
            <div className="w-16 h-16 bg-purple-light rounded-2xl flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-heading-4 text-primary mb-3">Mood Monitoring</h3>
            <p className="text-body-regular text-gray-600">
              Record and analyze your mood patterns to better understand your emotional well-being.
            </p>
          </div>

          <div className="card">
            <div className="w-16 h-16 bg-primary-very-light rounded-2xl flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </div>
            <h3 className="text-heading-4 text-primary mb-3">Sleep Tracking</h3>
            <p className="text-body-regular text-gray-600">
              Monitor your sleep patterns and improve your sleep quality with detailed insights.
            </p>
          </div>

          <div className="card">
            <div className="w-16 h-16 bg-orange-light rounded-2xl flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-heading-4 text-primary mb-3">Activity Tracking</h3>
            <p className="text-body-regular text-gray-600">
              Keep track of your daily activities and maintain an active lifestyle.
            </p>
          </div>

          <div className="card">
            <div className="w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-heading-4 text-primary mb-3">Weight Management</h3>
            <p className="text-body-regular text-gray-600">
              Set goals, track progress, and achieve your weight management objectives.
            </p>
          </div>

          <div className="card">
            <div className="w-16 h-16 bg-purple-light rounded-2xl flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-heading-4 text-primary mb-3">Recipe Library</h3>
            <p className="text-body-regular text-gray-600">
              Access a curated collection of healthy recipes to support your nutrition goals.
            </p>
          </div>

          <div className="card">
            <div className="w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-heading-4 text-primary mb-3">Content Library</h3>
            <p className="text-body-regular text-gray-600 mb-3">
              Access comprehensive educational resources including General wellness, Behavioral Skills, Hunger management, and Stress Management content.
            </p>
            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-primary rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-heading-2 mb-4">Ready to Get Started?</h2>
          <p className="text-body-large mb-8 opacity-90 max-w-2xl mx-auto">
            Download the Appetec mobile app to start your wellness journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Google Play Button */}
            <a
              href="#"
              className="app-store-button"
            >
              <div className="flex items-center space-x-3 px-5 py-3">
                {/* Google Play Icon */}
                <img 
                  src="/assets/google-play.png" 
                  alt="Google Play" 
                  className="w-10 h-10 object-contain flex-shrink-0"
                />
                <div className="text-left">
                  <div className="text-[10px] font-medium opacity-90 leading-tight">GET IT ON</div>
                  <div className="text-base font-bold leading-tight">Google Play</div>
                </div>
              </div>
            </a>

            {/* App Store Button */}
            <a
              href="#"
              className="app-store-button"
            >
              <div className="flex items-center space-x-3 px-5 py-3">
                {/* App Store Icon */}
                <img 
                  src="/assets/apple_white.png" 
                  alt="App Store" 
                  className="w-10 h-10 object-contain flex-shrink-0"
                />
                <div className="text-left">
                  <div className="text-[10px] font-medium opacity-90 leading-tight">Download on the</div>
                  <div className="text-base font-bold leading-tight">App Store</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
