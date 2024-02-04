export async function generateMetadata() {
  return {
    title: "CloudyDrinks",
  };
}

interface SBMusicLayoutProps {
  children: React.ReactNode;
}

const SBMusicLayout = ({ children }: SBMusicLayoutProps) => {
  return <>{children}</>;
};

export default SBMusicLayout;
