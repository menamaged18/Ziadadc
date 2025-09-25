import Image from 'next/image'

function page() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
        <section 
        id="about"
        className="py-18 bg-gray-50 max-w-7xl mx-auto"
        >
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left column for text content */}
            <div className="md:flex-1">
                <h2 className="text-3xl font-bold text-[#14502e] mb-6">Certificate of Channel Partner</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                    Certificate of Channel Partner awarded by SPC | Free Zone to ZIADA FOR DOCUMENTS CLEARING SERVICES L.L.C for the year 2025. 
                    The certificate recognizes ZIADA FOR DOCUMENTS CLEARING SERVICES L.L.C as a valued Channel Partner of the Sharjah Publishing City - Free Zone Authority. 
                    This designation highlights their role in facilitating services or business operations in connection with the Free Zone.
                </p>
            </div>
            
            {/* Right column for image */}
            <div className="md:flex-1">
                <div className="relative h-96 rounded-lg shadow-xl overflow-hidden">
                <Image
                    src="/License/License2.jpg" 
                    alt="Certificate of Channel partner"
                    height={400}
                    width={400}
                    className="rounded-lg object-cover w-full h-full"
                />
                </div>
            </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default page