export const adminAccounts = [
  {
    id: "super-admin",
    name: "Amina Okafor",
    email: "superadmin@takbusiness.com",
    role: "Super Admin",
    // Super Admin can access every area and controls other admins.
    permissions: [
      "full_access",
      "manage_roles",
      "finance",
      "support",
      "analytics"
    ]
  },
  {
    id: "finance-admin",
    name: "Liam Chen",
    email: "finance@takbusiness.com",
    role: "Finance Admin",
    permissions: ["finance", "transactions", "subscriptions", "analytics"]
  },
  {
    id: "support-admin",
    name: "Zara Bello",
    email: "support@takbusiness.com",
    role: "Support Admin",
    permissions: ["users", "businesses", "support"]
  }
];

export const statsCards = [
  { title: "Total Users", value: "184,204", delta: "+4.3%" },
  { title: "Active Users", value: "92,310", delta: "+2.1%" },
  { title: "Businesses Registered", value: "12,945", delta: "+1.8%" },
  { title: "Active Subscriptions", value: "9,402", delta: "+3.2%" },
  { title: "Total Revenue", value: "$4.8M", delta: "+6.7%" },
  { title: "Refunds", value: "$124K", delta: "-1.1%" }
];

export const growthData = [
  { month: "Jan", users: 42000, revenue: 220000, subscriptions: 6200 },
  { month: "Feb", users: 51000, revenue: 260000, subscriptions: 7000 },
  { month: "Mar", users: 64000, revenue: 310000, subscriptions: 8200 },
  { month: "Apr", users: 78000, revenue: 400000, subscriptions: 9200 },
  { month: "May", users: 89000, revenue: 480000, subscriptions: 10400 },
  { month: "Jun", users: 102000, revenue: 540000, subscriptions: 11900 },
  { month: "Jul", users: 121000, revenue: 620000, subscriptions: 13300 },
  { month: "Aug", users: 138000, revenue: 720000, subscriptions: 14400 },
  { month: "Sep", users: 152000, revenue: 820000, subscriptions: 15800 }
];

export const users = [
  {
    id: "USR-1042",
    name: "Khairul Islam",
    email: "khairul@takbusiness.com",
    status: "Active",
    role: "Owner",
    businesses: 3,
    lastActive: "2h ago"
  },
  {
    id: "USR-1043",
    name: "Maya Johnson",
    email: "maya@takbusiness.com",
    status: "Active",
    role: "Manager",
    businesses: 1,
    lastActive: "1d ago"
  },
  {
    id: "USR-1044",
    name: "Samuel Owusu",
    email: "samuel@takbusiness.com",
    status: "Suspended",
    role: "Owner",
    businesses: 2,
    lastActive: "7d ago"
  },
  {
    id: "USR-1045",
    name: "Linh Tran",
    email: "linh@takbusiness.com",
    status: "Active",
    role: "Finance",
    businesses: 4,
    lastActive: "4h ago"
  },
  {
    id: "USR-1046",
    name: "Ravi Patel",
    email: "ravi@takbusiness.com",
    status: "Active",
    role: "Support",
    businesses: 1,
    lastActive: "5h ago"
  }
];

export const businesses = [
  {
    id: "BIZ-9001",
    name: "Electric Store",
    owner: "Khairul Islam",
    status: "Active",
    plan: "Scale",
    revenue: "$128K"
  },
  {
    id: "BIZ-9002",
    name: "Luna Logistics",
    owner: "Maya Johnson",
    status: "Active",
    plan: "Growth",
    revenue: "$88K"
  },
  {
    id: "BIZ-9003",
    name: "Tak Fintech",
    owner: "Samuel Owusu",
    status: "Suspended",
    plan: "Enterprise",
    revenue: "$214K"
  }
];

export const transactions = [
  {
    id: "TX-24001",
    business: "Electric Store",
    amount: "$4,200",
    status: "Completed",
    date: "Sep 18, 2024"
  },
  {
    id: "TX-24002",
    business: "Luna Logistics",
    amount: "$2,900",
    status: "Completed",
    date: "Sep 18, 2024"
  },
  {
    id: "TX-24003",
    business: "Tak Fintech",
    amount: "$6,120",
    status: "Refunded",
    date: "Sep 17, 2024"
  }
];

export const notifications = [
  {
    id: "note-1",
    title: "New enterprise signup",
    description: "Tak Fintech upgraded to Enterprise plan.",
    time: "2 minutes ago"
  },
  {
    id: "note-2",
    title: "Refund request",
    description: "Refund submitted by Luna Logistics.",
    time: "30 minutes ago"
  },
  {
    id: "note-3",
    title: "Subscription renewal",
    description: "Electric Store renewed Growth plan.",
    time: "2 hours ago"
  }
];

export const searchItems = [
  { label: "Dashboard Overview", path: "/" },
  { label: "User Management", path: "/users" },
  { label: "User Details", path: "/users/USR-1042" },
  { label: "Business Management", path: "/businesses" },
  { label: "Business Analytics", path: "/businesses/BIZ-9001" },
  { label: "Subscriptions & Billing", path: "/subscriptions" },
  { label: "Transactions & Refunds", path: "/transactions" },
  { label: "Emails & Notifications", path: "/emails" },
  { label: "Analytics", path: "/analytics" },
  { label: "Admin Roles & Permissions", path: "/roles" },
  { label: "Settings", path: "/settings" }
];

export const roleTemplates = [
  {
    id: "role-super",
    title: "Super Admin",
    description: "Full system access with audit controls.",
    permissions: ["full_access", "manage_roles", "finance", "analytics"]
  },
  {
    id: "role-finance",
    title: "Finance Admin",
    description: "Billing, transactions, and revenue insights.",
    permissions: ["finance", "transactions", "subscriptions"]
  },
  {
    id: "role-support",
    title: "Support Admin",
    description: "User support, business status, and chat flows.",
    permissions: ["users", "businesses", "support"]
  }
];
