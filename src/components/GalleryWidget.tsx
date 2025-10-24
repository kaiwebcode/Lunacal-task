import { useState } from "react";
import { ChevronLeft, ChevronRight, HelpCircle, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

export const GalleryWidget = () => {
  const [images, setImages] = useState<string[]>([gallery1, gallery2, gallery3]);
  const [startIndex, setStartIndex] = useState(0);

  const handleAddImage = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e: Event) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target?.result as string;
          setImages((prev) => [...prev, result]);
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  const handlePrevious = () => startIndex > 0 && setStartIndex(startIndex - 1);
  const handleNext = () => startIndex + 3 < images.length && setStartIndex(startIndex + 1);

  const visibleImages = images.slice(startIndex, startIndex + 3);

  return (
    <div className="bg-[#1a1a1a]/90 backdrop-blur-xl rounded-3xl p-6 shadow-[0_8px_24px_rgba(0,0,0,0.6)] border border-[#262626] transition-all">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full bg-[#2a2a2a] hover:bg-[#333] transition-colors shadow-inner">
            <HelpCircle className="w-5 h-5 text-[#a1a1a1]" />
          </button>
          <div className="bg-[#2a2a2a] rounded-3xl px-8 py-3 shadow-inner">
            <h2 className="text-lg font-semibold text-[#e6e6e6]">Gallery</h2>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3">
          <Button
            className="bg-[#2f2f2f] hover:bg-[#3a3a3a] rounded-full border border-[#333] px-6 py-2 shadow-lg font-medium text-sm text-[#e6e6e6] flex items-center gap-2 transition-all"
            onClick={handleAddImage}
          >
            <Plus className="w-4 h-4" />
            ADD IMAGE
          </Button>
          <div className="flex gap-2">
            <button
              onClick={handlePrevious}
              disabled={startIndex === 0}
              className="p-3 rounded-full bg-[#2a2a2a] hover:bg-[#333] transition-colors disabled:opacity-30 disabled:cursor-not-allowed shadow-md"
            >
              <ChevronLeft className="w-5 h-5 text-[#e6e6e6]" />
            </button>
            <button
              onClick={handleNext}
              disabled={startIndex + 3 >= images.length}
              className="p-3 rounded-full bg-[#2a2a2a] hover:bg-[#333] transition-colors disabled:opacity-30 disabled:cursor-not-allowed shadow-md"
            >
              <ChevronRight className="w-5 h-5 text-[#e6e6e6]" />
            </button>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-3 gap-4">
        {visibleImages.map((image, index) => (
          <div
            key={startIndex + index}
            className="aspect-square rounded-3xl overflow-hidden bg-[#2a2a2a] shadow-[0_4px_15px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.6)] transition-all"
          >
            <img
              src={image}
              alt={`Gallery image ${startIndex + index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
