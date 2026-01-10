import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Login from "./Components/Login"
import AdminLogin from "./Components/AdminLogin"
import Register from "./Components/Register"
import AdminDashboard from "./Components/AdminDashboard"
import DashboardPage from "./Components/DashboardPage"
import BillDetailsPage from "./Components/BillDetailsPage"
import PaymentHistoryPage from "./Components/PaymentHistoryPage"
import PaymentPage from "./pages/PaymentPage"
import ReceiptPage from "./pages/ReceiptPage"
import ProtectedRoute from "./Components/ProtectedRoute"
import { Routes, Route, useLocation } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"

function AppContent() {
  const location = useLocation();
  const publicPaths = ["/", "/about", "/services"];
  const showHeaderFooter = publicPaths.includes(location.pathname);

  return (
    <>
      {showHeaderFooter && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/register" element={<Register />} />

        <Route path="/admin" element={
          <ProtectedRoute requireAdmin={true}>
            <AdminDashboard />
          </ProtectedRoute>
        } />

        <Route path="/dashboard" element={
          <ProtectedRoute requireCustomer={true}>
            <DashboardPage />
          </ProtectedRoute>
        } />

        <Route path="/payment" element={
          <ProtectedRoute requireCustomer={true}>
            <PaymentPage />
          </ProtectedRoute>
        } />

        <Route path="/receipt" element={
          <ProtectedRoute requireCustomer={true}>
            <ReceiptPage />
          </ProtectedRoute>
        } />

        <Route path="/billdetails" element={
          <ProtectedRoute requireCustomer={true}>
            <BillDetailsPage />
          </ProtectedRoute>
        } />

        <Route path="/payment-history" element={
          <ProtectedRoute requireCustomer={true}>
            <PaymentHistoryPage />
          </ProtectedRoute>
        } />
      </Routes>

      {showHeaderFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}

export default App