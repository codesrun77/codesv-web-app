// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import App from './App';
import VidPage from './pages/VidPage';
import VidPlusPage from './pages/VidPlusPage';
import VgoPage from './pages/VgoPage';
import VgoPlusPage from './pages/VgoPlusPage';
import AuthCallback from './pages/admin/AuthCallback';
import Login from './pages/admin/Login';
import Register from './pages/admin/Register';
import ForgotPassword from './pages/admin/ForgotPassword';
import UpdatePassword from './pages/admin/UpdatePassword';
import Dashboard from './pages/admin/Dashboard';
import Profile from './pages/admin/Profile';
import Account from './pages/admin/Account';
import SelectPlan from './pages/admin/SelectPlan';
import SelectPlanNew from './pages/admin/SelectPlanNew';
import ThankYou from './pages/admin/ThankYou';
import CardRequest from './pages/admin/CardRequest';
import Orders from './pages/admin/Orders';
import UserVidPage from './pages/UserVidPage';
import UserVgoPage from './pages/UserVgoPage';
import ProfileRouter from './pages/ProfileRouter';
import DownloadVCard from './pages/DownloadVCard';
import DownloadAdditionalVCard from './pages/DownloadAdditionalVCard';
import PaymentSuccess from './pages/PaymentSuccess';
import SubscriptionSuccess from './pages/SubscriptionSuccess';
import ContentManagement from './pages/admin/ContentManagement';
import UsersManagement from './pages/admin/UsersManagement';
import SubscriptionsManagement from './pages/admin/SubscriptionsManagement';
import CardRequestsManagement from './pages/admin/CardRequestsManagement';
import PricingManagement from './pages/admin/PricingManagement';
import VgoCardPricing from './pages/admin/VgoCardPricing';
// Import the email related components
import EmailManagement from './pages/admin/EmailManagement';
import AutomaticEmailsManagement from './pages/admin/AutomaticEmailsManagement';
// Import analytics component
import UserAnalytics from './pages/dashboard/UserAnalytics';
// Import admin analytics component
import AdminAnalytics from './pages/admin/AdminAnalytics';
// Import new protected analytics page
import Analytics from './pages/admin/Analytics';
// Import coupons management
import CouponsManagement from './pages/admin/CouponsManagement';
// Import digital wallet card component
import DigitalWalletCard from './pages/admin/DigitalWalletCard';
// Import financial dashboard component
import FinancialDashboard from './pages/admin/FinancialDashboard';

// Import VGO subscription fix component
import FixVGOSubscription from './pages/admin/FixVGOSubscription';
// Webhook test component removed
// Import Profile Setup Wizard
import ProfileSetupWizard from './pages/admin/ProfileSetupWizard';
// Import Multiple Profiles Manager
import MultipleProfilesManager from './pages/admin/MultipleProfilesManager';
// Import New Home Page for testing
import NewHomePage from './pages/NewHomePage';
import VidDetailsPage from './pages/VidDetailsPage'
import VgoDetailsPage from './pages/VgoDetailsPage'
import VgoCardDetailsPage from './pages/VgoCardDetailsPage'  
import CardsShowcasePage from './pages/CardsShowcasePage'
import PricingPage from './pages/PricingPage'
import DirectRedirectPage from './pages/DirectRedirectPage'
import TermsAndConditions from './pages/TermsAndConditions'
import PrivacyPolicy from './pages/PrivacyPolicy'
import EmailWaiting from './pages/admin/EmailWaiting'


import { ThemeProvider } from './context/ThemeContext';
import './index.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminRoute from './components/AdminRoute';
import ProtectedRoute from './components/ProtectedRoute';
// Import the admin dashboard component
import AdminDashboard from './pages/admin/AdminDashboard';
// Import subscription router components
import SubscriptionRouter from './components/SubscriptionRouter';
import DashboardRouter from './components/DashboardRouter';
import ScrollToTop from './components/ScrollToTop';

// App wrapper 
function AppWrapper() {
  return (
    <React.StrictMode>
      <LanguageProvider>
        <ThemeProvider>
          <BrowserRouter>
            <ScrollToTop />
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
            <Routes>
              <Route path="/" element={<NewHomePage />} />
              {/* Old Home Page (for backup) */}
              <Route path="/old-home" element={<App />} />
              <Route path="/admin/callback" element={<AuthCallback />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/update-password" element={<UpdatePassword />} />
              <Route path="/email-waiting" element={<EmailWaiting />} />
              
              {/* Protected Routes */}
              <Route path="/dashboard" element={<ProtectedRoute><DashboardRouter /></ProtectedRoute>} />
              <Route path="/dashboard/*" element={<ProtectedRoute><DashboardRouter /></ProtectedRoute>} />
              <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
              <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
              <Route path="/select-plan" element={<ProtectedRoute><SelectPlan /></ProtectedRoute>} />
              <Route path="/select-plan-new" element={<ProtectedRoute><SelectPlanNew /></ProtectedRoute>} />
              <Route path="/thank-you" element={<ProtectedRoute><ThankYou /></ProtectedRoute>} />
              <Route path="/card-request" element={<ProtectedRoute><CardRequest /></ProtectedRoute>} />
              <Route path="/orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
              <Route path="/profile-setup" element={<ProtectedRoute><ProfileSetupWizard /></ProtectedRoute>} />
              <Route path="/multiple-profiles" element={<ProtectedRoute><MultipleProfilesManager /></ProtectedRoute>} />
              
              {/* Admin Routes */}
              <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
              <Route path="/admin/dashboard" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
              <Route path="/admin/content" element={<AdminRoute><ContentManagement /></AdminRoute>} />
              <Route path="/admin/users" element={<AdminRoute><UsersManagement /></AdminRoute>} />
              <Route path="/admin/subscriptions" element={<AdminRoute><SubscriptionsManagement /></AdminRoute>} />
              <Route path="/admin/card-requests" element={<AdminRoute><CardRequestsManagement /></AdminRoute>} />
              <Route path="/admin/pricing" element={<AdminRoute><PricingManagement /></AdminRoute>} />
              <Route path="/admin/vgo-card-pricing" element={<AdminRoute><VgoCardPricing /></AdminRoute>} />
              <Route path="/admin/emails" element={<AdminRoute><EmailManagement /></AdminRoute>} />
              <Route path="/admin/automatic-emails" element={<AdminRoute><AutomaticEmailsManagement /></AdminRoute>} />
              <Route path="/admin/analytics" element={<AdminRoute><AdminAnalytics /></AdminRoute>} />
              <Route path="/admin/analytics-new" element={<AdminRoute><Analytics /></AdminRoute>} />
              <Route path="/admin/coupons" element={<AdminRoute><CouponsManagement /></AdminRoute>} />
              <Route path="/admin/digital-wallet" element={<AdminRoute><DigitalWalletCard /></AdminRoute>} />
              <Route path="/admin/financial" element={<AdminRoute><FinancialDashboard /></AdminRoute>} />
              <Route path="/admin/fix-vgo" element={<AdminRoute><FixVGOSubscription /></AdminRoute>} />
              
              {/* Public Pages */}
              <Route path="/vid" element={<VidPage />} />
              <Route path="/vid-plus" element={<VidPlusPage />} />
              <Route path="/vgo" element={<VgoPage />} />
              <Route path="/vgo-plus" element={<VgoPlusPage />} />
              <Route path="/vid-details" element={<VidDetailsPage />} />
              <Route path="/vgo-details" element={<VgoDetailsPage />} />
              <Route path="/vgo-card-details" element={<VgoCardDetailsPage />} />
              <Route path="/cards-showcase" element={<CardsShowcasePage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/terms" element={<TermsAndConditions />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              
              {/* User Profile Pages */}
              <Route path="/u/:username" element={<UserVidPage />} />
              <Route path="/v/:username" element={<UserVgoPage />} />
              <Route path="/profile/:profileId" element={<ProfileRouter />} />
              <Route path="/download/:userId" element={<DownloadVCard />} />
              <Route path="/download-additional/:profileId" element={<DownloadAdditionalVCard />} />
              
              {/* Payment Success Pages */}
              <Route path="/payment-success" element={<PaymentSuccess />} />
              <Route path="/subscription-success" element={<SubscriptionSuccess />} />
              
              {/* Direct Redirect */}
              <Route path="/redirect/:id" element={<DirectRedirectPage />} />
              
              {/* Catch all route */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </LanguageProvider>
    </React.StrictMode>
  );
}

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<AppWrapper />);