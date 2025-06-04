function AuthenticationPages({ children }) {
  return (
    <div className="min-h-screen p-[30px] flex flex-col justify-center items-center bg-white">
      <img
        className="h-auto w-[300px] mx-auto mb-[20px]"
        srcSet="/images/logo.svg 2x"
        alt="pulse-vibes-l"
      />
      {children}
    </div>
  );
}

export default AuthenticationPages;
