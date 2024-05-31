import { Footer } from "@/components/project/footer";
import { Header } from "@/components/project/header";
import { Sidebar } from "@/components/project/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";

const HeaderFooterLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ScrollArea className="w-screen h-screen">
      <div className="lg:max-w-4xl md:max-w-3xl w-screen min-h-screen px-3 md:px-0 md:m-auto">
        <Sidebar />
        <Header />
        {children}
        <Footer />
      </div>
    </ScrollArea>
  );
};

export default HeaderFooterLayout;
