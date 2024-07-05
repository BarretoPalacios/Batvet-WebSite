

function Iframe({src,width,height}) {
  return (
    <iframe
    className="iframe-component"
      src={src}
      sandbox="allow-scripts allow-same-origin"
      width={width}
      height={height}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

export default Iframe;
