import { FC, useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import { cn } from "@/lib/utils"; // Adjust import if needed

type PhotoBottomSheetProps = {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  initialPhotoIndex?: number;
};

const PhotoBottomSheet: FC<PhotoBottomSheetProps> = ({
  isOpen,
  onClose,
  images,
  initialPhotoIndex = 0,
}) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(initialPhotoIndex);
  const [showSwipeHint, setShowSwipeHint] = useState<boolean>(false);
  const sheetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrentPhotoIndex(initialPhotoIndex);
    setShowSwipeHint(true);

    const hintTimer = setTimeout(() => {
      setShowSwipeHint(false);
    }, 3000);

    return () => clearTimeout(hintTimer);
  }, [initialPhotoIndex]);

  // Close the photo sheet when clicking outside of it
  const handleClickOutside = (event: MouseEvent) => {
    if (sheetRef.current && !sheetRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("touchmove", preventTouchMove, {
        passive: false,
      });
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("touchmove", preventTouchMove);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("touchmove", preventTouchMove);
    };
  }, [isOpen]);

  const handlers = useSwipeable({
    onSwipedLeft: () => nextPhoto(),
    onSwipedRight: () => prevPhoto(),
    trackMouse: true,
  });

  const nextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const preventTouchMove = (event: TouchEvent) => {
    event.preventDefault();
  };

  return (
    <div
      className={cn(
        "fixed inset-0 bg-black bg-opacity-70 flex justify-center items-end z-50 transition-opacity duration-1000",
        {
          "opacity-100": isOpen,
          "opacity-0 pointer-events-none": !isOpen,
        }
      )}
    >
      <div
        ref={sheetRef}
        className={cn(
          "bg-black w-full h-3/4 rounded-t-lg p-4 shadow-lg transition-transform duration-1000",
          {
            "transform translate-y-0": isOpen,
            "transform translate-y-full": !isOpen,
          }
        )}
      >
        <div className="flex justify-between">
          <button className="text-xl text-white" onClick={onClose}>
            &times; {/* Close button */}
          </button>
          <span className="text-lg text-white">{`Photo ${
            currentPhotoIndex + 1
          } of ${images.length}`}</span>
          <div />
        </div>

        <div className="flex items-center justify-center h-full" {...handlers}>
          <div className="flex items-center justify-center w-full h-full">
            <Image
              src={images[currentPhotoIndex]}
              alt={`Photo ${currentPhotoIndex + 1}`}
              width={800}
              height={600}
              className="max-w-full max-h-full object-contain" // Center and scale image properly
            />
          </div>

          {showSwipeHint && (
            <div className="absolute bottom-8 text-center text-white text-lg">
              Swipe to change photos
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotoBottomSheet;
