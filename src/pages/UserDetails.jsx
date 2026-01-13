import React from 'react'
import Card from '../components/common/Card'
import LoadingSkeleton from '../components/common/LoadingSkeleton'

const UserDetails = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">User details</h1>
      <p className="text-sm text-slate-500 dark:text-slate-400">
        Activity, businesses owned, and subscription timeline.
      </p>
    </div>

    <div className="grid gap-4 lg:grid-cols-3">
      <Card className="space-y-3">
        <h3 className="text-sm font-semibold text-slate-500">Profile</h3>
        <div className="text-lg font-semibold text-slate-900 dark:text-white">Khairul Islam</div>
        <p className="text-sm text-slate-500">khairul@takbusiness.com</p>
        <p className="text-sm text-slate-500">Role: Business Owner</p>
      </Card>
      <Card className="space-y-3">
        <h3 className="text-sm font-semibold text-slate-500">Businesses owned</h3>
        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-200">
          <li>Electric Store</li>
          <li>Tak Ventures</li>
          <li>Urban Supplies</li>
        </ul>
      </Card>
      <Card className="space-y-3">
        <h3 className="text-sm font-semibold text-slate-500">Subscription history</h3>
        <LoadingSkeleton lines={4} />
      </Card>
    </div>

    <Card className="space-y-4">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Recent activity</h3>
      <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-200">
        <li>Upgraded to Scale plan · 2 hours ago</li>
        <li>Added a new business location · Yesterday</li>
        <li>Invited 4 team members · 3 days ago</li>
      </ul>
    </Card>
  </div>
)

export default UserDetails
