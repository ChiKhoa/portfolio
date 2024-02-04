export async function generateMetadata() {
  return {
    title: "SBmusic",
  };
}

interface SBMusicLayoutProps {
  children: React.ReactNode;
}

const SBMusicLayout = ({ children }: SBMusicLayoutProps) => {
  return <>{children}</>;
};

export default SBMusicLayout;
