export async function generateMetadata() {
  return {
    title: "Cloudy Drinks | Project",
  };
}

interface SBMusicLayoutProps {
  children: React.ReactNode;
}

const SBMusicLayout = ({ children }: SBMusicLayoutProps) => {
  return <>{children}</>;
};

export default SBMusicLayout;
