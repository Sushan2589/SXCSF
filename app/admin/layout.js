import Sidebar from "@/components/Sidebar"

export default function AdminLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="p-4 w-full">{children}</main>
    </div>
  )
}
