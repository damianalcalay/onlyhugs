import { motion } from "framer-motion";

type FancyButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  selected?: boolean;
};

export const FancyButton = ({ children, onClick, selected = false }: FancyButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="relative w-full overflow-hidden rounded-md px-4 py-3 border text-left transition-colors bg-[#1a1a1a] text-white hover:border-[#00AEEF]"
    >
      {selected && (
        <motion.div
          layoutId="selectedBackground"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-[#00AEEF] z-0"
        />
      )}
      <span className={`relative z-10 ${selected ? "text-black font-medium" : ""}`}>
        {children}
      </span>
    </button>
  );
};
