const scrollTo = async (id: string) => {

  console.log("🚀 ~ scrollTo ~ id:", id);

  const yOffset = screen.width < 800 ? -120 : -95;
  const element = document.getElementById(id);
  const y: any = element && element.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({ top: y, behavior: 'smooth' });
};

export default scrollTo;
