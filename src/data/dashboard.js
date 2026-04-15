// Mock data for the entire dashboard
export const MOCK_USER = {
  name: "Al Hasan Nirob",
  email: "nirob@bashabari.com",
  role: "admin", // "admin" | "owner" | "renter"
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
};

export const MOCK_MESSAGES = [
  { id: 1, name: "Tanvir Hossain", email: "tanvir@gmail.com", subject: "Inquiry about Gulshan Villa", message: "Hello, I am very interested in the Modern Architectural Villa listed in Gulshan 2. Could you please let me know if it is still available and arrange a viewing this weekend?", date: "Apr 14, 2026", read: false },
  { id: 2, name: "Sadia Islam", email: "sadia.islam@outlook.com", subject: "Question about lease terms", message: "I would like to understand the lease terms for the Banani Penthouse. Specifically, I am wondering about the notice period and whether the security deposit is negotiable.", date: "Apr 13, 2026", read: false },
  { id: 3, name: "Karim Hossain", email: "k.hossain@company.bd", subject: "Corporate housing inquiry", message: "We are looking for corporate housing for 3 of our executives relocating to Dhaka next month. Do you have suitable options in Gulshan or Banani with month-to-month leases?", date: "Apr 12, 2026", read: true },
  { id: 4, name: "Nasrin Begum", email: "nasrin.b@yahoo.com", subject: "Family-friendly apartments", message: "We are a family of 4 looking for a 3-bedroom apartment in Dhanmondi or Mirpur. Our budget is around 60,000 BDT per month. Could you suggest some options?", date: "Apr 11, 2026", read: true },
  { id: 5, name: "Rahim Ahmed", email: "rahim.a@gmail.com", subject: "Partnership proposal", message: "I am a property owner with 5 premium apartments in Uttara. I would like to discuss listing them exclusively on your platform. Could we schedule a call this week?", date: "Apr 10, 2026", read: true },
];

export const MOCK_OWNER_LISTINGS = [
  { id: "prop-1", title: "Modern Architectural Villa", location: "Gulshan 2, Dhaka", price: 150000, beds: 4, baths: 4, status: "active", views: 342, inquiries: 8, image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=400", type: "Villa", listedAt: "Apr 01, 2026" },
  { id: "prop-2", title: "Luxury Penthouse", location: "Banani, Dhaka", price: 120000, beds: 3, baths: 3, status: "active", views: 218, inquiries: 5, image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=400", type: "Penthouse", listedAt: "Apr 03, 2026" },
  { id: "prop-3", title: "Minimalist Smart Apartment", location: "Dhanmondi, Dhaka", price: 65000, beds: 3, baths: 2, status: "inactive", views: 91, inquiries: 2, image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=400", type: "Apartment", listedAt: "Apr 05, 2026" },
  { id: "prop-4", title: "Spacious Duplex", location: "Baridhara DOHS, Dhaka", price: 180000, beds: 5, baths: 5, status: "active", views: 156, inquiries: 3, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400", type: "Duplex", listedAt: "Apr 07, 2026" },
];

export const MOCK_SAVED_PROPERTIES = [
  { id: "prop-2", title: "Luxury Penthouse", location: "Banani, Dhaka", price: 120000, beds: 3, baths: 2, image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800" },
  { id: "prop-6", title: "Corporate Executive Suite", location: "Mohakhali DOHS, Dhaka", price: 85000, beds: 2, baths: 2, image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800" },
  { id: "prop-7", title: "Lakeside Serenity House", location: "Uttara Sector 4, Dhaka", price: 95000, beds: 4, baths: 3, image: "https://images.unsplash.com/photo-1600585153490-76fb20a32601?auto=format&fit=crop&q=80&w=800" },
];
