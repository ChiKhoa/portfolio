export async function generateMetadata() {
  return {
    title: "Share Story | Project",
  };
}

interface ShareStoryLayoutProps {
  children: React.ReactNode;
}

const ShareStoryLayout = ({ children }: ShareStoryLayoutProps) => {
  return <>{children}</>;
};

export default ShareStoryLayout;
