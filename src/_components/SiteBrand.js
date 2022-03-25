import "../App.css";

import logo from "../_assets/wild-boar-logo.png";

const SiteBrand = () => {
  return (
    <div className="site-brand">
      <img
        src={logo}
        className="App-logo"
        alt="logo"
        width="100"
        height="auto"
      />
      <h2 className="site-brand-title">The Thwarthog</h2>
    </div>
  );
};

export default SiteBrand;
