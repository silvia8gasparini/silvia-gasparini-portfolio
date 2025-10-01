import "../styles/FoxIntro.scss"

const FoxIntro = () => {
  return (
    <div className="fox-wrapper absolute top-[60%] left-[40%]">
      <div className="fox">
        <div className="fox__ear fox__ear--left"></div>
        <div className="fox__ear fox__ear--right"></div>
        <div className="fox__head"></div>
        <div className="fox__eye fox__eye--left"></div>
        <div className="fox__eye fox__eye--right"></div>
        <div className="fox__nose"></div>
        <div className="fox__mouth"></div>
        <div className="fox__cheek fox__cheek--left"></div>
        <div className="fox__cheek fox__cheek--right"></div>
        <div className="fox__body"></div>
        <div className="fox__front-paw fox__front-paw--left"></div>
        <div className="fox__front-paw fox__front-paw--right"></div>
        <div className="fox__back-paw fox__back-paw--left"></div>
        <div className="fox__back-paw js-fox__back-paw--right fox__back-paw--right"></div>
        <div className="fox__tail"></div>
      </div>
    </div>
  );
};

export default FoxIntro;