import React from 'react'

const Footer = () => {
  return (
    <footer className="px-4 divide-y bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-white">
    <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
      {/* Brand Logo */}
      <div className="lg:w-1/3">
        <a href="#" className="flex justify-center space-x-3 lg:justify-start">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-violet-600">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5 text-white">
              <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
            </svg>
          </div>
          <span className="self-center text-2xl font-semibold">Brand Name</span>
        </a>
      </div>
  
      {/* Navigation Links */}
      <div className="grid grid-cols-2 text-sm gap-x-6 gap-y-8 lg:w-2/3 sm:grid-cols-4">
        <div className="space-y-3">
          <h3 className="tracking-wide uppercase font-semibold">Product</h3>
          <ul className="space-y-1">
            <li><a href="#">Features</a></li>
            <li><a href="#">Integrations</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="tracking-wide uppercase font-semibold">Company</h3>
          <ul className="space-y-1">
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="uppercase font-semibold">Developers</h3>
          <ul className="space-y-1">
            <li><a href="#">Public API</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Guides</a></li>
          </ul>
        </div>
  
        {/* Social Media Links */}
        <div className="space-y-3">
          <h3 className="uppercase font-semibold">Social Media</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.13 8.438 9.878v-6.993h-2.54V12h2.54V9.797c0-2.507 1.493-3.89 3.778-3.89 1.096 0 2.238.195 2.238.195v2.46h-1.26c-1.244 0-1.63.775-1.63 1.567V12h2.773l-.443 2.885h-2.33v6.993C18.343 21.13 22 16.991 22 12z"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M23.954 4.569a10 10 0 01-2.825.775A4.958 4.958 0 0022.163 2.62c-.951.555-2.005.959-3.127 1.184A4.92 4.92 0 0012.282 8.99c-5.691 0-10.297-4.307-10.297-9.616a4.82 4.82 0 00-.667 2.475c0 1.71.87 3.213 2.188 4.096A4.904 4.904 0 01.567 4.986v.06c0 2.38 1.693 4.374 3.946 4.827a4.996 4.996 0 01-2.212.085c.63 1.953 2.445 3.376 4.604 3.417A9.868 9.868 0 010 19.291a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.97l-.046-.02z"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-pink-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 3.25.146 4.771 1.692 4.917 4.917.059 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.146 3.225-1.667 4.771-4.917 4.917-1.265.059-1.645.07-4.849.07s-3.584-.012-4.849-.07c-3.25-.146-4.771-1.692-4.917-4.917-.059-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849C2.462 3.925 4.008 2.379 7.258 2.233 8.523 2.175 8.903 2.163 12 2.163m0-2.163C8.748 0 8.323.013 7.053.07c-4.731.218-7.11 2.597-7.328 7.328C-.012 8.323 0 8.748 0 12c0 3.252.013 3.677.07 4.947.218 4.731 2.597 7.11 7.328 7.328C8.323 23.987 8.748 24 12 24c3.252 0 3.677-.013 4.947-.07 4.731-.218 7.11-2.597 7.328-7.328C23.987 15.677 24 15.252 24 12c0-3.252-.013-3.677-.07-4.947C23.712 2.322 21.332 0 16.601 0H12z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  
    {/* Footer Bottom */}
    <div className="py-6 text-sm text-center">© {new Date().getFullYear()} Company Co. All rights reserved.</div>
  </footer>
  
  )
}

export default Footer
