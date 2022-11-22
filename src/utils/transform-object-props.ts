import { convertStringToCamelCase } from "./convert-string-to-camel-case";

export const transformObjectProps = (data: any) =>
  Object.fromEntries(
    Object.entries(data).map(([prop, value]) => {
      if (typeof value === "object") {
        let newObj = {};

        for (const key in value) {
          newObj[convertStringToCamelCase(key) as keyof typeof newObj] =
            value[key as keyof typeof value];
        }

        return [prop, newObj];
      }

      return [prop, value];
    })
  );
