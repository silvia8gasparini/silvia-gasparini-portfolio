import '../styles/FallingSnow.css';

const FallingSnow = () => {
  const snowImgs = ["/snow/snow1.png", "/snow/snow2.png", "/snow/snow3.png", "/snow/snow4.png"];

  const renderSnow = (setClass: string) => (
    <div className={`set ${setClass}`}>
      {Array.from({ length: 8 }).map((_, i) => (
        <div className="leaves" key={`${setClass}-${i}`}>
          <img src={snowImgs[i % 4]} alt="snow" />
        </div>
      ))}
    </div>
  );

  return (
    <section className="falling-snow-section">
      {renderSnow('')}
      {renderSnow('set2')}
      {renderSnow('set3')}
    </section>
  );
};

export default FallingSnow;
