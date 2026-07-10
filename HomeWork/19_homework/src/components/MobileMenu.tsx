import "./MobileMenu.css";

interface MobileMenuProps {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <div className="mobile-menu-overlay" onClick={onClose}>
      <div className="mobile-menu-panel" onClick={(e) => e.stopPropagation()}>
        <button className="menu-close-btn" onClick={onClose}>
          ✕
        </button>
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}