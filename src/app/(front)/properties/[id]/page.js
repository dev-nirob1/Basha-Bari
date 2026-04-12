import Breadcrumb from "@/components/ui/Breadcrumb";
import PropertyGallery from "@/components/property/details/PropertyGallery";
import PropertyHeader from "@/components/property/details/PropertyHeader";
import PropertySpecs from "@/components/property/details/PropertySpecs";
import PropertyDescription from "@/components/property/details/PropertyDescription";
import PropertyAmenities from "@/components/property/details/PropertyAmenities";
import PropertyPolicies from "@/components/property/details/PropertyPolicies";
import NearbyPlaces from "@/components/property/details/NearbyPlaces";
import FloorPlan from "@/components/property/details/FloorPlan";
import PropertyMap from "@/components/property/details/PropertyMap";
import PropertySidebar from "@/components/property/details/PropertySidebar";
import SimilarProperties from "@/components/property/details/SimilarProperties";

// Mock data for a single property
const PROPERTY = {
  id: "prop-1",
  title: "Modern Architectural Villa",
  location: "Gulshan 2, Dhaka",
  price: 150000,
  status: "Available now",
  listedAt: "Oct 12, 2023",
  specs: {
    beds: 4,
    baths: 4,
    area: 3200,
    type: "Villa",
  },
  description:
    "Experience unparalleled luxury in this stunning minimalist villa located in the heart of Gulshan 2. Designed by award-winning architects, this property blends raw textures with refined elegance. The floor-to-ceiling windows bathe the entire home in natural light while providing seamless access to the private courtyard. Perfect for diplomats, executives, or anyone who appreciates the finer aspects of modern design.",
  amenities: [
    "High-Speed WiFi",
    "Central Air Conditioning",
    "2 Car Parking",
    "24/7 Security",
    "Elevator",
    "Private Garden",
    "Smart Home System",
  ],
  policies: [
    { label: "Security Deposit", value: "3 Months Rent (Refundable)" },
    { label: "Notice Period", value: "2 Months in Advance" },
    { label: "Pet Policy", value: "Small pets allowed (Subject to approval)" },
    { label: "Smoking Policy", value: "Not allowed inside the premises" },
  ],
  nearby: [
    { name: "United Hospital", type: "Health", distance: "1.2 km", time: "5 min drive" },
    { name: "Westin Dhaka", type: "Hotel", distance: "0.5 km", time: "3 min walk" },
    { name: "American International School", type: "Education", distance: "2.1 km", time: "8 min drive" },
    { name: "Unimart Gulshan", type: "Shopping", distance: "0.8 km", time: "5 min walk" },
  ],
  floorPlan: {
    image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=1200",
    rooms: [
      { label: "Master Bedroom", dimensions: "16' x 18'", area: "288" },
      { label: "Living Area", dimensions: "24' x 20'", area: "480" },
      { label: "Kitchen", dimensions: "12' x 14'", area: "168" },
      { label: "Guest Suite", dimensions: "14' x 15'", area: "210" },
      { label: "Dining Hall", dimensions: "18' x 16'", area: "288" },
      { label: "Balcony", dimensions: "12' x 6'", area: "72" },
    ]
  },
  images: [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1920",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
  ],
  owner: {
    name: "Ahmed Reza",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
  },
};

// Mock data for similar properties section
const SIMILAR_PROPERTIES = [
  {
    id: "prop-2",
    title: "Luxury Penthouse",
    location: "Banani, Dhaka",
    price: 120000,
    beds: 3,
    baths: 3,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: "prop-3",
    title: "Minimalist Smart Apartment",
    location: "Dhanmondi, Dhaka",
    price: 65000,
    beds: 3,
    baths: 2,
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: "prop-4",
    title: "Spacious Duplex",
    location: "Baridhara DOHS, Dhaka",
    price: 180000,
    beds: 5,
    baths: 5,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600",
  },
];

export default function PropertyDetailsPage() {
  return (
    <div className="bg-zinc-50 min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="mb-6">
          <Breadcrumb 
            items={[
              { label: "Properties", href: "/properties" },
              { label: PROPERTY.title }
            ]} 
          />
        </div>

        {/* SECTION 1: IMAGE GALLERY */}
        <PropertyGallery images={PROPERTY.images} title={PROPERTY.title} />

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left Column (Main Content) */}
          <div className="flex-1 w-full space-y-12">
            
            {/* SECTION 2: PROPERTY HEADER */}
            <PropertyHeader property={PROPERTY} />

            {/* SECTION 3: KEY DETAILS */}
            <PropertySpecs specs={PROPERTY.specs} />

            {/* SECTION 4: DESCRIPTION */}
            <PropertyDescription description={PROPERTY.description} />

            {/* SECTION 5: AMENITIES */}
            <PropertyAmenities amenities={PROPERTY.amenities} />

            {/* SECTION 10: FLOOR PLAN */}
            <FloorPlan floorPlan={PROPERTY.floorPlan} />

            {/* SECTION 11: POLICIES */}
            <PropertyPolicies policies={PROPERTY.policies} />

            {/* SECTION 12: NEARBY PLACES */}
            <NearbyPlaces places={PROPERTY.nearby} />

            {/* SECTION 6: MAP */}
            <PropertyMap />
          </div>

          {/* SECTION 7 & 8: RIGHT SIDEBAR */}
          <PropertySidebar property={PROPERTY} />

        </div>

        {/* SECTION 9: SIMILAR PROPERTIES */}
        <SimilarProperties properties={SIMILAR_PROPERTIES} />

      </div>
    </div>
  );
}