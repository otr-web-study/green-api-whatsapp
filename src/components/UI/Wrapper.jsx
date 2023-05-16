export const Wrapper = ({ children }) => (
  <div className="w-full h-full min-h-[512px] overflow-hidden bg-gradient-to-b from-bg_def to-bg_deeper relative z-0 after:h-[127px] after:w-full after:content-[''] after:bg-bg_stripe after:fixed after:top-0 after:z-0">
    {children}
  </div>
);
