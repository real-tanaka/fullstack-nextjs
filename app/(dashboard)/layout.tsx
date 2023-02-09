import GlassPane from "@/components/GlassPane";
import Sidebar from "@/components/Sidebar";
import "@/styles/global.css";

const DashboardRootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head />
      <body className="h-screen w-screen candy-mesh p-6">
        <GlassPane className={"w-full h-full flex items-center "}>
          <Sidebar />
          {children}
        </GlassPane>
      </body>
    </html>
  );
};

export default DashboardRootLayout;
