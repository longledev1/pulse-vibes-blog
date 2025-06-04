function HomeBanner() {
  return (
    <div className="">
      <div className="flex items-center gap-x-4">
        <p className="text-primary text-xl ">Blog</p>
        <div className="w-[100px] mt-2 h-[8px] bg-primary"></div>
        <p className="text-gray-500 text-md">Posted 23 May, 16:32PM</p>
      </div>
      <h1 className="text-[80px] font-custom mt-4 mb-4">
        Why Storytelling Is Your Blog’s Secret Weapon
      </h1>
      <img
        src="https://images.unsplash.com/photo-1519791883288-dc8bd696e667?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Decor"
        className="w-full h-[500px] object-cover"
        style={{
          clipPath: 'polygon(40px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 40px)',
          border: '8px solid #f3f2e9',
          backgroundColor: '#f3f2e9',
        }}
      />
    </div>
  );
}

export default HomeBanner;
