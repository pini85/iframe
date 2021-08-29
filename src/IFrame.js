const IFrame = ({ url }) => {
  const style = {
    height: "100vh",
  };
  return (
    <div style={style}>
      <iframe src={url} height="100%" width="100%" />
    </div>
  );
};

export default IFrame;
