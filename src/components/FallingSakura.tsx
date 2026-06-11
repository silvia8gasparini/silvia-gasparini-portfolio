import '../styles/FallingSakura.css';

const FallingSakura = () => {
  const sakuraImgs = ["/sakura/sakura1.png", "/sakura/sakura2.png", "/sakura/sakura3.png", "/sakura/sakura4.png"];

  const renderSakura = (setClass: string) => (
    <div className={`set ${setClass}`}>
      {Array.from({ length: 8 }).map((_, i) => (
        <div className="sakura" key={`${setClass}-${i}`}>
          <img src={sakuraImgs[i % 4]} alt="sakura" />
        </div>
      ))}
    </div>
  );

  return (
    <section className="falling-sakura-section">
      {renderSakura('')}
      {renderSakura('set2')}
      {renderSakura('set3')}
    </section>
  );
};

export default FallingSakura;