import { lazy, Suspense } from "react";
import { useIsMobile } from "../hooks/useMobile";

const HomeDesktop = lazy(() => import("./HomeDesktop"));
const HomeMobile = lazy(() => import("./HomeMobile"));

export default function Home() {
  const isMobile = useIsMobile();

  const loader = (
    <div className="min-h-screen bg-cream-base flex items-center justify-center">
      <svg className="pl w-20 h-20" viewBox="0 0 240 240">
        <circle className="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#C89968" strokeWidth="20" strokeDasharray="0 660" strokeDashoffset="-330" strokeLinecap="round"></circle>
        <circle className="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#2B2520" strokeWidth="20" strokeDasharray="0 220" strokeDashoffset="-110" strokeLinecap="round"></circle>
        <circle className="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#9BA89C" strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round"></circle>
        <circle className="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#E8DCC8" strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round"></circle>
      </svg>
    </div>
  );

  // Prevent flash of wrong layout before client-side hydration detects media queries
  if (isMobile === undefined) {
    return loader;
  }

  return (
    <Suspense fallback={loader}>
      {isMobile ? <HomeMobile /> : <HomeDesktop />}
    </Suspense>
  );
}

