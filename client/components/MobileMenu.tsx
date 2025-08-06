import { useState } from "react";
import { X, Menu } from "lucide-react";

interface MobileMenuProps {
  currentSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function MobileMenu({
  currentSection,
  onNavigate,
}: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: "home", label: "HOME" },
    { id: "entertainment", label: "ENTERTAINMENT" },
    { id: "programs", label: "PROGRAMS" },
    { id: "competitions", label: "COMPETITIONS" },
    { id: "contact", label: "CONTACT" },
  ];

  const handleNavigate = (sectionId: string) => {
    onNavigate(sectionId);
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-[#FFF6E2] p-2 hover:text-[#DA4A01] transition-colors"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-[#DA4A01]/30">
          <div className="px-4 py-6 space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`block w-full text-left text-[#FFF6E2] font-medium text-lg py-2 transition-all ${
                  currentSection === item.id
                    ? "text-[#DA4A01] font-semibold"
                    : "hover:text-[#DA4A01]"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button className="w-full bg-gradient-to-r from-[#8B0000] to-[#FF6C00] text-[#FFF6E2] px-6 py-3 rounded-lg font-semibold mt-4">
              Register Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
