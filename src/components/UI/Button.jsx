const Button = ({ children, onClick, extraClass = '', disabled = false }) => {
  const className = `w-2/3 h-9 mt-6 bg-bg_stripe/80 rounded hover:bg-bg_stripe/70 transition-colors flex justify-center items-center ${
    extraClass ? extraClass : ''
  }`;

  return (
    <button disabled={disabled} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
