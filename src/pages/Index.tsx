// import { TabWidget } from "@/components/TabWidget";
// import { GalleryWidget } from "@/components/GalleryWidget";
import { GalleryWidget } from "@/components/GalleryWidget";
import { TabWidget } from "@/components/TabWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0e0e0e] ">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[calc(100vh-4rem)]">
          {/* Left Half - Empty */}
          <div className="hidden lg:block" />

          {/* Right Half - Widgets */}
          <div className="space-y-6 flex flex-col justify-center max-w-3xl">
            <TabWidget />
            <GalleryWidget />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
