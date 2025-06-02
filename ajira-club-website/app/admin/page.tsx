import type { Metadata } from "next"
import MemberManagement from "../components/admin/MemberManagement"
import PaymentVerification from "../components/admin/PaymentVerification"
import ContentUpload from "../components/admin/ContentUpload"
import RenewalReminders from "../components/admin/RenewalReminders"

export const metadata: Metadata = {
  title: "Admin Dashboard | Mut Ajira digital club",
  description: "Manage members, payments, content, and send reminders",
}

export default function AdminDashboard() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">
          Admin <span className="text-red-600">Dashboard</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <MemberManagement />
          <PaymentVerification />
          <ContentUpload />
          <RenewalReminders />
        </div>
      </div>
    </main>
  )
}

