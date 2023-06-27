import {
  CompartmentImage,
  CompartmentRow,
  CompartmentWrap,
} from "./HomeCompartments.styles";

export default function HomeCompartments(props) {
  const { stack } = props;
  const numOfBlock = stack.length;

  return (
    <CompartmentRow>
      <CompartmentWrap>
        {stack.map((block, index) => {
          return (
            <CompartmentImage
              src={block?.imageUrl}
              alt="img"
              numOfBlock={numOfBlock}
            />
          );
        })}
      </CompartmentWrap>
    </CompartmentRow>
  );
}
