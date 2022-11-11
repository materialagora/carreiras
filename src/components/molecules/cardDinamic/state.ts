import { useEffect, useState } from "react";

export const useCardDinamicState = (data: object) => {
  const [obj, setObj] = useState<any>({});

  useEffect(() => {
    if (typeof data !== "object") return;
    setObj(data);
  }, [data]);

  const getValue = (key: string) => {
    if (typeof obj[key] !== "object") {
      return obj[key];
    }
    return (obj[key] as []).join(", ");
  };

  return {
    obj,
    getValue,
  };
};
