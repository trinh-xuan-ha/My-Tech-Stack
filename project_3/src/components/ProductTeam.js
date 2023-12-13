function ProductTeam(props) {
  const { Application, Interface, Desion, Image, Number } = props;
  return (
    <div className={`product-team-${Number}`}>
      <div className="desion-title-team">
        <span className="application-name">{Application}</span>
        <h2 className="interface-name">{Interface}</h2>
        <p className="desion-name">{Desion}</p>
        <span className="portfolio">view portfolio</span>
        <div className="crossbar"></div>
      </div>
      <div className="image-product">
        <img src={Image} alt="error"></img>
      </div>
    </div>
  );
}
export default ProductTeam;
