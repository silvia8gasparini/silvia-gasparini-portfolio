import '../styles/FallingSun.css';

const FallingSun = () => {
  const sunImgs = ["/sunflower/sunflower1.png", "/sunflower/sunflower2.png", "/sunflower/sunflower3.png", "/sunflower/sunflower4.png"];

  const renderSunflower = (setClass: string) => (
    <div className={`set ${setClass}`}>
      {Array.from({ length: 8 }).map((_, i) => (
        <div className="sunflower" key={`${setClass}-${i}`}>
          <img src={sunImgs[i % 4]} alt="sunflower" />
        </div>
      ))}
    </div>
  );

  return (
    <section className="falling-sunflower-section">
      {renderSunflower('')}
      {renderSunflower('set2')}
      {renderSunflower('set3')}
    </section>
  );
};

export default FallingSun;
