import FetchData from "./components/FetchData";
import Modal from "./components/Modal";
import Expander from "./components/Expander";
import Slider from "./components/Slider";

import "./styles.css";

export default function App() {
  return (
    <>
      <Modal>
        <FetchData />
      </Modal>

      <Expander>
        <div style={{ background: "red" }}>OPEN MODAL</div>
        <h2>What is Lorem Ipsum?</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </Expander>

      <Slider>
        <p>Slide 1</p>
        <p>Slide 2</p>
        <p>Slide 3</p>
        <p>Slide 4</p>
        <p>Slide 5</p>
      </Slider>
    </>
  );
}
