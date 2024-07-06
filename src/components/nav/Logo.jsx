function Logo({  src, alt, size }) {
  return (
    <a href={"#"} className="logo">
      <img className="logo-img" src={src} alt={alt} style={{maxWidth:`${size}px`}}/>
    </a>
  );
}

export default Logo;
