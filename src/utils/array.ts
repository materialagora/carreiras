const array = () => {
  function excluded<T extends { id: number }>(list: T[], deletedIDs: number[]) {
    return list.filter((item) => !deletedIDs.includes(item.id));
  }

  return {
    excluded,
  };
};

export default array;
