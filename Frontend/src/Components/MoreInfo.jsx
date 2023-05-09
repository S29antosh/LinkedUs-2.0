import "../CSS files/AboutUs.css";

const MoreInfo = ({ closeModal3 }) => {
  return (
    <>
      <div className="MainWrapper">
        <div className="ModelContent">
          <h1>More Information</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
            voluptatem at! Tempore iusto et assumenda tenetur eos illo enim
            cumque architecto libero velit! Possimus tempora est a, ipsa totam
            soluta?Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Soluta aut doloremque, maxime, necessitatibus ratione esse
            laudantium quia qui exercitationem fugit, quod itaque dicta. Unde,
            laborum. Ab quos dolor corrupti tempora!
          </p>
          <button id="ViewMore" onClick={() => closeModal3()}>
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default MoreInfo;
