export const browser = () => {
  const goBack = () => window.history.back();
  return {
    goBack,
  };
};
