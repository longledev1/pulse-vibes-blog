import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/auth-context';
import SignUpPage from './pages/Authentication/SignUpPage';
import SignInPage from './pages/Authentication/SignInPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import PostDetailPage from './pages/Details/PostDetailPage';
import HomeContent from './modules/home/HomeContent';

// Dashboard
import DashboardHome from './pages/Dashboard/DashboardHome';
import DashboardAddPost from './pages/Dashboard/DashoardAddPost';
import DashboardLayout from './modules/dashboard/DashboardLayout';
import CategoryRoutes from './modules/category/cate.route';
function App() {
  return (
    <div className="bg-secondary min-h-screen">
      <AuthProvider>
        <Routes>
          {/* Layout */}
          <Route path="/" element={<HomePage />}>
            <Route index element={<HomeContent />} />
            <Route path="set-up-cuc-chill" element={<PostDetailPage />} />
          </Route>

          {/* Authentication */}
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/sign-in" element={<SignInPage />} />

          {/* Dashboard */}

          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardHome />} />
            <Route path="create-new-post" element={<DashboardAddPost />} />

            {CategoryRoutes()}

          </Route>

          {/* Error Page */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
