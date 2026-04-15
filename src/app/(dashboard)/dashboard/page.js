import { MOCK_USER } from "@/data/dashboard";
import { redirect } from "next/navigation";

export default function DashboardRedirect() {
  const role = MOCK_USER.role;
  if (role === "admin") redirect("/admin");
  if (role === "owner") redirect("/owner");
  redirect("/renter");
}
