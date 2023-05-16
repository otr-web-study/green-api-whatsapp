export const Container = ({ children }) => (
  <div className="w-full h-full flex mx-auto overflow-hidden z-10 relative shadow-container bg-panel_bg_lighter xl:w-full-38 xl:h-full-38 xl:max-w-[1600px] xl:top-[19px]">
    {children}
  </div>
);
