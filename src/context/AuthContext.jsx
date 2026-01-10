import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [packages, setPackages] = useState(() => {
    const storedPackages = localStorage.getItem('internetPayPackages');
    return storedPackages ? JSON.parse(storedPackages) : [
      { id: 'p1', name: 'Basic 10Mbps', price: 15.00, speed: '10 Mbps', features: ['Unlimited Data', 'Email Support', '1 Device'] },
      { id: 'p2', name: 'Fiber 20Mbps', price: 25.00, speed: '20 Mbps', features: ['Unlimited Data', 'Priority Support', '3 Devices', 'Free Router'], popular: true },
      { id: 'p3', name: 'Premium 50Mbps', price: 45.00, speed: '50 Mbps', features: ['Unlimited Data', '24/7 Support', '5 Devices', 'Free Router', 'Static IP'] },
      { id: 'p4', name: 'Business 100Mbps', price: 85.00, speed: '100 Mbps', features: ['Unlimited Data', 'Dedicated Support', 'Unlimited Devices', 'Free Equipment', 'Static IP', 'SLA Guarantee'] },
    ];
  });

  useEffect(() => {
    localStorage.setItem('internetPayPackages', JSON.stringify(packages));
  }, [packages]);

  const addPackage = (pkg) => {
    const newPkg = { ...pkg, id: Date.now().toString() };
    setPackages([...packages, newPkg]);
  };

  const updatePackage = (updatedPkg) => {
    setPackages(packages.map(p => p.id === updatedPkg.id ? updatedPkg : p));
  };

  const deletePackage = (id) => {
    setPackages(packages.filter(p => p.id !== id));
  };

  const [extraServices, setExtraServices] = useState(() => {
    const storedExtra = localStorage.getItem('internetPayExtraServices');
    return storedExtra ? JSON.parse(storedExtra) : [
      { id: 'e1', name: 'Installation', description: 'Professional installation within 24–48 hours', price: '$50 (one-time)' },
      { id: 'e2', name: 'Equipment Rental', description: 'Latest router models available', price: '$5/month' },
      { id: 'e3', name: 'Technical Support', description: 'On-site support when you need it', price: '$30/visit' },
    ];
  });

  useEffect(() => {
    localStorage.setItem('internetPayExtraServices', JSON.stringify(extraServices));
  }, [extraServices]);

  const addExtraService = (svc) => {
    const newSvc = { ...svc, id: Date.now().toString() };
    setExtraServices([...extraServices, newSvc]);
  };

  const updateExtraService = (updatedSvc) => {
    setExtraServices(extraServices.map(s => s.id === updatedSvc.id ? updatedSvc : s));
  };

  const deleteExtraService = (id) => {
    setExtraServices(extraServices.filter(s => s.id !== id));
  };

  useEffect(() => {
    // Check local storage for persisted session
    const storedUser = localStorage.getItem('internetPayUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Helper to sync user changes to the global "Database" (for Admin view)
  const syncToGlobalDB = (updatedUser) => {
    const allUsers = JSON.parse(localStorage.getItem('all_users') || '[]');
    const index = allUsers.findIndex(u => u.email === updatedUser.email);

    if (index !== -1) {
      allUsers[index] = updatedUser;
      localStorage.setItem('all_users', JSON.stringify(allUsers));
    }
  };

  const login = (email, password) => {
    // 1. Admin Login
    if (email === 'admin@test.com' && password === 'admin') {
      const adminUser = { name: 'Admin User', email, role: 'admin' };
      setUser(adminUser);
      localStorage.setItem('internetPayUser', JSON.stringify(adminUser));
      return true;
    }

    // 2. Regular User Login
    const allUsers = JSON.parse(localStorage.getItem('all_users') || '[]');
    const foundUser = allUsers.find(u => u.email === email && u.password === password);

    if (foundUser) {
      // Ensure we load the latest state (in case admin edited it)
      setUser(foundUser);
      localStorage.setItem('internetPayUser', JSON.stringify(foundUser));
      return true;
    }

    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('internetPayUser');
  };

  const register = (name, email, password) => {
    // Check if user already exists
    const allUsers = JSON.parse(localStorage.getItem('all_users') || '[]');
    if (allUsers.find(u => u.email === email)) {
      return false; // Email taken
    }

    const newUser = {
      id: Date.now(), // Simple ID
      name,
      email,
      password,
      role: 'user',
      plan: null, // No plan initially
      status: 'Inactive', // Default
      paymentStatus: 'Unpaid',
      amountDue: 0, // No amount due until package selected
      due: null,
      paymentHistory: []
    };

    // 1. Save to Global DB
    allUsers.push(newUser);
    localStorage.setItem('all_users', JSON.stringify(allUsers));

    // 2. Auto Login (Session)
    setUser(newUser);
    localStorage.setItem('internetPayUser', JSON.stringify(newUser));
    localStorage.setItem('lastRegisteredEmail', email);

    return true;
  };

  const markAsPaid = (transactionDetails) => {
    if (user) {
      const updatedHistory = [...(user.paymentHistory || []), transactionDetails];
      const updatedUser = {
        ...user,
        paymentStatus: 'Paid',
        status: 'Active',
        amountDue: 0,
        paymentHistory: updatedHistory
      };

      // 1. Update Session
      setUser(updatedUser);
      localStorage.setItem('internetPayUser', JSON.stringify(updatedUser));

      // 2. Update Global DB (For Admin Visibility)
      syncToGlobalDB(updatedUser);
    }
  };

  const selectPackage = (packageName, price) => {
    if (user) {
      const updatedUser = {
        ...user,
        plan: packageName,
        amountDue: price,
        due: new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
      };

      setUser(updatedUser);
      localStorage.setItem('internetPayUser', JSON.stringify(updatedUser));
      syncToGlobalDB(updatedUser);
    }
  };

  // Admin: Get all users
  const getAllUsers = () => {
    const allUsers = JSON.parse(localStorage.getItem('all_users') || '[]');
    // Add some mock users if empty for demo purposes, ONLY if completely empty
    if (allUsers.length === 0) {
      const mockUsers = [
        { id: 1, name: 'John Doe', email: 'john@example.com', password: '123', role: 'user', plan: 'Fiber 20Mbps', status: 'Active', amountDue: 0, due: '10 Jan 2026', paymentHistory: [{ id: 'MOCK-1', amount: '$25.00', date: '01 Jan 2026', method: 'Cash', status: 'Success' }] },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', password: '123', role: 'user', plan: 'Fiber 40Mbps', status: 'Inactive', amountDue: 35.00, due: '15 Jan 2026', paymentHistory: [] },
      ];
      localStorage.setItem('all_users', JSON.stringify(mockUsers));
      return mockUsers;
    }
    return allUsers;
  };

  // Admin: Update User
  const updateUserBill = (userEmail, modifications) => {
    const allUsers = JSON.parse(localStorage.getItem('all_users') || '[]');
    const index = allUsers.findIndex(u => u.email === userEmail);

    if (index !== -1) {
      const updatedUser = { ...allUsers[index], ...modifications };
      allUsers[index] = updatedUser;
      localStorage.setItem('all_users', JSON.stringify(allUsers));

      // If the logged-in user is the one being edited, update their session too
      if (user && user.email === userEmail) {
        setUser(updatedUser);
        localStorage.setItem('internetPayUser', JSON.stringify(updatedUser));
      }
      return true;
    }
    return false;
  }

  const deleteUser = (userId) => {
    const allUsers = JSON.parse(localStorage.getItem('all_users') || '[]');
    const filteredUsers = allUsers.filter(u => u.id !== userId);
    localStorage.setItem('all_users', JSON.stringify(filteredUsers));
    return true;
  }

  const value = {
    user,
    login,
    logout,
    register,
    markAsPaid,
    selectPackage,
    packages,
    addPackage,
    updatePackage,
    deletePackage,
    extraServices,
    addExtraService,
    updateExtraService,
    deleteExtraService,
    getAllUsers,
    updateUserBill,
    deleteUser
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
