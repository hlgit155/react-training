import {
  CompartmentBox,
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
        {stack.map((block, blcokIdx) => {
          return (
            <CompartmentBox>
              <CompartmentImage
                src={block?.imageUrl}
                alt="img"
                numOfBlock={numOfBlock}
              />
            </CompartmentBox>
          );
        })}
      </CompartmentWrap>
    </CompartmentRow>
  );
}
