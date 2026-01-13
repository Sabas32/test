export const testAdmins = [
  {
    id: 'admin-super',
    name: 'Aisha Morgan',
    email: 'super@takbusiness.com',
    password: 'TakSuper#2024',
    role: 'Super Admin',
    permissions: ['all']
  },
  {
    id: 'admin-finance',
    name: 'Daniel Wu',
    email: 'finance@takbusiness.com',
    password: 'TakFinance#2024',
    role: 'Finance Admin',
    permissions: ['billing:view', 'billing:edit', 'transactions:view', 'transactions:refunds']
  },
  {
    id: 'admin-support',
    name: 'Leah Patel',
    email: 'support@takbusiness.com',
    password: 'TakSupport#2024',
    role: 'Support Admin',
    permissions: ['users:view', 'users:edit', 'emails:send', 'tickets:view']
  }
]

export const dashboardStats = [
  { label: 'Total Users', value: '128,320', delta: '+8.2%' },
  { label: 'Active Users', value: '102,445', delta: '+4.1%' },
  { label: 'Businesses Registered', value: '18,902', delta: '+2.7%' },
  { label: 'Active Subscriptions', value: '12,479', delta: '+5.3%' },
  { label: 'Total Revenue', value: '$3.42M', delta: '+11.9%' },
  { label: 'Refunds', value: '$24,500', delta: '-1.2%' }
]

export const userGrowth = [
  { month: 'Jan', users: 12000 },
  { month: 'Feb', users: 16800 },
  { month: 'Mar', users: 21000 },
  { month: 'Apr', users: 28400 },
  { month: 'May', users: 35600 },
  { month: 'Jun', users: 42500 },
  { month: 'Jul', users: 50600 },
  { month: 'Aug', users: 58800 },
  { month: 'Sep', users: 67200 },
  { month: 'Oct', users: 76400 },
  { month: 'Nov', users: 85200 },
  { month: 'Dec', users: 94300 }
]

export const revenueSeries = [
  { month: 'Jan', revenue: 220000, subscriptions: 3200 },
  { month: 'Feb', revenue: 280000, subscriptions: 3900 },
  { month: 'Mar', revenue: 310000, subscriptions: 4400 },
  { month: 'Apr', revenue: 360000, subscriptions: 4800 },
  { month: 'May', revenue: 420000, subscriptions: 5200 },
  { month: 'Jun', revenue: 470000, subscriptions: 6100 },
  { month: 'Jul', revenue: 510000, subscriptions: 6900 },
  { month: 'Aug', revenue: 560000, subscriptions: 7300 },
  { month: 'Sep', revenue: 610000, subscriptions: 7800 },
  { month: 'Oct', revenue: 670000, subscriptions: 8400 },
  { month: 'Nov', revenue: 720000, subscriptions: 9100 },
  { month: 'Dec', revenue: 790000, subscriptions: 9800 }
]

export const userTable = [
  {
    id: 'usr-001',
    name: 'Khairul Islam',
    email: 'khairul@takbusiness.com',
    status: 'Active',
    plan: 'Scale',
    businesses: 3,
    lastActive: '2 hours ago'
  },
  {
    id: 'usr-002',
    name: 'Maya Rodriguez',
    email: 'maya@takbusiness.com',
    status: 'Active',
    plan: 'Growth',
    businesses: 1,
    lastActive: 'Yesterday'
  },
  {
    id: 'usr-003',
    name: 'Henry Cole',
    email: 'henry@takbusiness.com',
    status: 'Suspended',
    plan: 'Starter',
    businesses: 2,
    lastActive: '5 days ago'
  },
  {
    id: 'usr-004',
    name: 'Fatima Noor',
    email: 'fatima@takbusiness.com',
    status: 'Active',
    plan: 'Enterprise',
    businesses: 6,
    lastActive: 'Today'
  }
]

export const businesses = [
  {
    id: 'biz-001',
    name: 'Electric Store',
    owner: 'Khairul Islam',
    status: 'Active',
    plan: 'Scale',
    region: 'Bangladesh',
    featured: true
  },
  {
    id: 'biz-002',
    name: 'Zen Retail',
    owner: 'Maya Rodriguez',
    status: 'Active',
    plan: 'Growth',
    region: 'Mexico',
    featured: false
  },
  {
    id: 'biz-003',
    name: 'Northstar Goods',
    owner: 'Henry Cole',
    status: 'Suspended',
    plan: 'Starter',
    region: 'United States',
    featured: false
  }
]

export const subscriptions = [
  {
    id: 'sub-001',
    plan: 'Starter',
    price: '$39/mo',
    businesses: 3200,
    status: 'Active'
  },
  {
    id: 'sub-002',
    plan: 'Growth',
    price: '$89/mo',
    businesses: 2100,
    status: 'Active'
  },
  {
    id: 'sub-003',
    plan: 'Scale',
    price: '$149/mo',
    businesses: 1200,
    status: 'Active'
  },
  {
    id: 'sub-004',
    plan: 'Enterprise',
    price: 'Custom',
    businesses: 74,
    status: 'Custom'
  }
]

export const transactions = [
  {
    id: 'txn-991',
    business: 'Electric Store',
    amount: '$299.00',
    status: 'Paid',
    method: 'Visa',
    date: '2024-07-03'
  },
  {
    id: 'txn-992',
    business: 'Zen Retail',
    amount: '$149.00',
    status: 'Refunded',
    method: 'PayPal',
    date: '2024-07-02'
  },
  {
    id: 'txn-993',
    business: 'Northstar Goods',
    amount: '$89.00',
    status: 'Pending',
    method: 'Stripe',
    date: '2024-07-01'
  }
]

export const searchIndex = [
  { label: 'Dashboard Overview', route: '/', keywords: ['overview', 'home', 'stats'] },
  { label: 'User Management', route: '/users', keywords: ['users', 'customers', 'roles'] },
  { label: 'User Details', route: '/users/details', keywords: ['details', 'activity', 'subscriptions'] },
  { label: 'Business Management', route: '/businesses', keywords: ['business', 'stores'] },
  { label: 'Subscriptions & Billing', route: '/billing', keywords: ['billing', 'subscriptions', 'plans'] },
  { label: 'Transactions & Refunds', route: '/transactions', keywords: ['transactions', 'refunds'] },
  { label: 'Emails & Notifications', route: '/emails', keywords: ['emails', 'notifications', 'templates'] },
  { label: 'Analytics', route: '/analytics', keywords: ['analytics', 'retention', 'performance'] },
  { label: 'Admin Roles & Permissions', route: '/roles', keywords: ['roles', 'permissions', 'admins'] },
  { label: 'Settings', route: '/settings', keywords: ['settings', 'preferences'] }
]
