import Link from "next/link"

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white p-4">
      <h2 className="text-xl font-semibold mb-6">Admin Panel</h2>
      <nav>
        <ul className="space-y-4">
          <li><Link href="/admin/dashboard">Dashboard</Link></li>
          <li><Link href="/admin/users">Users</Link></li>
          <li><Link href="/admin/settings">Settings</Link></li>
        </ul>
      </nav>
    </aside>
  )
}
