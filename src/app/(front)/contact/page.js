import SectionHeader from "@/components/ui/SectionHeader";

export default function ContactPage() {
  return (
    <div className="bg-[#faf9f6] min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <SectionHeader 
            title="Contact Us"
            subtitle="We'd love to hear from you. Get in touch with our team."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT SIDE: Contact Form */}
          <div className="lg:col-span-7 bg-white p-10 lg:p-14 border border-zinc-200 shadow-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-zinc-50 -z-0"></div>
            
            <form className="relative z-10 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="John Doe" 
                    className="w-full bg-zinc-50 border border-zinc-200 px-6 py-4 placeholder:text-zinc-300 focus:outline-none focus:border-zinc-950 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-zinc-50 border border-zinc-200 px-6 py-4 placeholder:text-zinc-300 focus:outline-none focus:border-zinc-950 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  placeholder="How can we help?" 
                  className="w-full bg-zinc-50 border border-zinc-200 px-6 py-4 placeholder:text-zinc-300 focus:outline-none focus:border-zinc-950 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Message</label>
                <textarea 
                  id="message" 
                  rows="6" 
                  placeholder="Tell us more about your inquiry..." 
                  className="w-full bg-zinc-50 border border-zinc-200 px-6 py-4 placeholder:text-zinc-300 focus:outline-none focus:border-zinc-950 transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-zinc-950 text-white font-bold uppercase tracking-[0.4em] text-xs py-6 hover:bg-emerald-700 transition-all duration-500"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT SIDE: Contact Information */}
          <div className="lg:col-span-5 space-y-12">
            
            <div className="bg-zinc-50 border border-zinc-100 p-10 lg:p-14 space-y-12">
              <div className="space-y-4">
                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.4em]">Inquiry Department</p>
                <div className="space-y-1">
                  <p className="text-xl font-light text-zinc-950 tracking-tight">support@bashabari.com</p>
                  <p className="text-sm text-zinc-500 font-light">Available for general inquiries and technical help.</p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.4em]">Direct Line</p>
                <div className="space-y-1">
                  <p className="text-xl font-light text-zinc-950 tracking-tight">+880 1234 567 890</p>
                  <p className="text-sm text-zinc-500 font-light">Mon-Fri from 9AM to 6PM BDT.</p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.4em]">Headquarters</p>
                <div className="space-y-1">
                  <p className="text-xl font-light text-zinc-950 tracking-tight">Gulshan 2, Dhaka</p>
                  <p className="text-sm text-zinc-500 font-light">Bangladesh, 1212</p>
                </div>
              </div>
            </div>

            <div className="p-10 lg:p-14 bg-emerald-50 border border-emerald-100">
               <h4 className="text-emerald-900 font-bold uppercase tracking-widest text-xs mb-4">Visit Us</h4>
               <p className="text-emerald-800 font-light leading-relaxed text-sm">
                 Our office is open for scheduled consultations. If you'd like to discuss a premium curation project, please book an appointment via email.
               </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
