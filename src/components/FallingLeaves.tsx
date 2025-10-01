import '../styles/FallingLeaves.css';

const FallingLeaves = () => {
  const leavesImgs = ["/leaves/leaves1.png", "/leaves/leaves2.png", "/leaves/leaves3.png", "/leaves/leaves4.png"];

  const renderLeaves = (setClass: string) => (
    <div className={`set ${setClass}`}>
      {Array.from({ length: 8 }).map((_, i) => (
        <div className="leaves" key={`${setClass}-${i}`}>
          <img src={leavesImgs[i % 4]} alt="leaf" />
        </div>
      ))}
    </div>
  );

  return (
    <section className="falling-leaves-section">
      {renderLeaves('')}
      {renderLeaves('set2')}
      {renderLeaves('set3')}
    </section>
  );
};

export default FallingLeaves;
