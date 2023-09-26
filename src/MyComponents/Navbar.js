function Navbar() {
    return (
      <nav>
        <div className="logo">
          <h2>Space</h2>
        </div>
        <div className="links">
          <a>House</a>
          <a>Template</a>
          <a>Price</a>
          <a>Help</a>
          <button>Get In Touch</button>
        </div>
        <div className="Menu">
          <img
            srcSet="
              https://i.ibb.co/qnWnCX4/more-icon-32w.webp 32w,
              https://i.ibb.co/qnWnCX4/more-icon-48w.webp 48w,
              https://i.ibb.co/qnWnCX4/more-icon.webp 64w"
            sizes="(max-width: 48px) 32px, (max-width: 64px) 48px, 64px"
            src="https://i.ibb.co/qnWnCX4/more-icon.webp"
            alt="more"
          ></img>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  