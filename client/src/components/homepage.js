// src/HomePage.js
import React from 'react';

function HomePage() {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="bg-primary-500 text-white py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <img src="/static/sample.jpg" alt="FinCoach Example" className="w-full md:w-1/2 rounded-lg shadow-lg mb-6 md:mb-0" />
          <div className="md:w-1/2 md:pl-8">
            <h1 className="text-4xl font-bold mb-4">
              Create Your Tailored Financial Plan in <span className="text-secondary-500">Seconds</span>
            </h1>
            <p className="mb-6">
              When planning your finances, you want to make sure your strategy perfectly matches your goals. However, manually adjusting your financial plans to fit different scenarios can be tedious. 
              <br /><br />
              FinCoach allows you to create and store versions of your financial strategies, then merge and adjust them to create your perfectly tailored financial plan in seconds, so you can quickly act on your financial goals.
            </p>
            <a href="/create" className="bg-secondary-500 text-white py-2 px-4 rounded-lg hover:bg-secondary-600 transition duration-300">Build Your Financial Plan Now</a>
            <ul className="mt-6 space-y-2">
              <li className="flex items-center">
                <i className="fas fa-check-circle text-secondary-500 mr-2"></i>
                Create, customize, and save financial plans with ease
              </li>
              <li className="flex items-center">
                <i className="fas fa-lightbulb text-secondary-500 mr-2"></i>
                Expert advice and insights for better financial planning
              </li>
              <li className="flex items-center">
                <i className="fas fa-cogs text-secondary-500 mr-2"></i>
                Customizable templates tailored to your goals
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-700 mb-8">
            Why Choose <span className="text-secondary-500">FinCoach?</span>
          </h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-primary-100 p-6 rounded-lg shadow-lg">
                <i className="fas fa-check-circle text-primary-700 text-3xl mb-4"></i>
                <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
                <p>Our tools are designed to be user-friendly, making it simple to create a standout financial plan.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-primary-100 p-6 rounded-lg shadow-lg">
                <i className="fas fa-lightbulb text-primary-700 text-3xl mb-4"></i>
                <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
                <p>Get tips and advice from financial experts to help you craft a plan that truly impresses.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-primary-100 p-6 rounded-lg shadow-lg">
                <i className="fas fa-cogs text-primary-700 text-3xl mb-4"></i>
                <h3 className="text-xl font-semibold mb-2">Customization</h3>
                <p>Customize templates and content to tailor your plan to your financial goals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-primary-500 text-white py-12 text-center">
        <div className="container mx-auto px-4">
          <a href="/create" className="bg-secondary-500 text-white py-2 px-4 rounded-lg hover:bg-secondary-600 transition duration-300">Build Your Financial Plan Now</a>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
