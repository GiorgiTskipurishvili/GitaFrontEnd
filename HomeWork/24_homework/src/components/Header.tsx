
export default function Header() {
  return (
    <>
    <header className="relative h-39 overflow-hidden bg-teal" role="presentation">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 156"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0H1440V156C1200 60 900 180 620 100C380 32 180 130 0 60V0Z"
          fill="rgba(255,255,255,0.08)"
        />
        <path
          d="M0 0H1440V90C1250 140 1000 20 760 70C520 120 260 10 0 90V0Z"
          fill="rgba(255,255,255,0.06)"
        />
      </svg>
    </header>
    </>
  );
}
