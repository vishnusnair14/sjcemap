import { FC, useEffect, useRef } from "react";
import { cn } from "@/lib/utils"; // Adjust import if needed
import Image from "next/image";

type BottomSheetProps = {
  isOpen: boolean;
  onClose: () => void;
  google360Url: string;
};

const BottomSheet: FC<BottomSheetProps> = ({
  isOpen,
  onClose,
  google360Url,
}) => {
  const sheetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add event listener to close the sheet when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sheetRef.current &&
        !sheetRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    // Add event listener if sheet is open
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup event listener when component unmounts or sheet is closed
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={cn(
        "fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end z-50 transition-opacity duration-1000",
        {
          "opacity-100": isOpen,
          "opacity-0 pointer-events-none": !isOpen,
        }
      )}
    >
      <div
        ref={sheetRef}
        className={cn(
          "bg-white w-full h-3/4 rounded-t-lg p-4 shadow-lg transition-transform duration-1000",
          {
            "transform translate-y-0": isOpen,
            "transform translate-y-full": !isOpen,
          }
        )}
      >
        <Image
          src="/icons/close.png"
          alt="Close btn"
          onClick={onClose}
          width={24}
          height={24}
          className="text-jssorange font-bold absolute right-4 top-4"
        />

        <div className="w-full h-full">
          {/* Embed Google Maps 360 View */}
          <iframe
            src={google360Url}
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default BottomSheet;