import "./x";
const IFrame = ({ url }) => {
  const style = {
    height: "100vh",
  };
  console.log("hi");
  return (
    <div style={style}>
      <object
        data="https://www.mymeta.co.il/student/meta_unit/394"
        width="100%"
        height="100%"
        type="text/html"
      >
        Alternative Content
      </object>
      {/* <iframe src={url} height="100%" width="100%" /> */}
    </div>
  );
};

export default IFrame;
