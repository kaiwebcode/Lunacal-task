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
          setImages([result, ...images]);
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
    <div className="bg-[#363C43] rounded-3xl p-6 shadow-[0_8px_24px_rgba(0,0,0,0.6)] border border-neutral-800">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Button className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors">
            <HelpCircle className="w-5 h-5 text-neutral-400" />
          </Button>
          <div className="bg-[#171717] rounded-3xl px-8 py-3">
            <h2 className="text-lg font-semibold text-neutral-100">Gallery</h2>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3">
          <Button
            onClick={handleAddImage}
            className="bg-[#363C43] hover:bg-neutral-600 text-neutral-100 border-t rounded-full cursor-pointer px-20 py-6 shadow-xl font-medium text-sm flex items-center gap-2 transition-all"
          >
            <Plus className="w-4 h-4" />
            ADD IMAGE 
          </Button>
          <div className="flex gap-2">
            <Button
              onClick={handlePrevious}
              disabled={startIndex === 0}
              className="p-3 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors disabled:opacity-30 disabled:cursor-not-allowed shadow-md"
            >
              <ChevronLeft className="w-5 h-5 text-[#6F787C]" />
            </Button>
            <Button
              onClick={handleNext}
              disabled={startIndex + 3 >= images.length}
              className="p-3 rounded-full bg-[#161718] hover:bg-neutral-700 transition-colors disabled:opacity-30 disabled:cursor-not-allowed shadow-xl"
            >
              <ChevronRight className="w-5 h-5 text-[#6F787C]" />
            </Button>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-3 gap-4">
        {visibleImages.map((image, index) => (
          <div
            key={startIndex + index}
            className="aspect-square rounded-2xl overflow-hidden bg-neutral-800 shadow-[0_4px_15px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.6)] transition-all"
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
