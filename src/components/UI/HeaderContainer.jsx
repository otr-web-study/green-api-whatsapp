const HeaderContainer = ({ children }) => {
  return (
    <header className="flex gap-2 justify-end items-center px-4 py-2 bg-bg_gray h-[59px]">
      {children}
    </header>
  );
};

HeaderContainer.displayName = 'HeaderContainer';

export default HeaderContainer;
