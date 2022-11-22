import { useState } from "react";
import * as S from "./styles";

export type TabDataType = {
  title: string;
  children: React.ReactNode;
};

type TabProps = {
  data: TabDataType[];
};

const Tab: React.FC<TabProps> = ({ data }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <S.Wrapper>
      <S.Header>
        {data.map((value, index) => (
          <S.HeaderButton
            key={index}
            onClick={() => setActiveTabIndex(index)}
            active={index === activeTabIndex}
          >
            {value.title}
          </S.HeaderButton>
        ))}
      </S.Header>

      <S.Body>{data[activeTabIndex].children}</S.Body>
    </S.Wrapper>
  );
};

export default Tab;
