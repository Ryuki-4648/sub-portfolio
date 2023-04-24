type Props = {
  children: React.ReactNode;
};

const UnderPageTitle: React.FC<Props> = ({ children }) => {
  return (
    <h1 className="text-color02 text-type01 text-xl md:text-2xl mx-auto tracking-widest pt-32 md:pt-24 mb-12 md:mb-16">{children}</h1>
  )
}

export default UnderPageTitle;