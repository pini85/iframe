const IFrame = ({ url }) => {
  const style = {
    height: "100vh",
  };
  console.log("hi");
  return (
    <div style={style}>
      <iframe is="x-frame-bypass" src={url} height="100%" width="100%" />
    </div>
  );
};

export default IFrame;
