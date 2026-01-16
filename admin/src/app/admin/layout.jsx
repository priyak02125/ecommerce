import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
export const currency = "$";
export default function admin({ children }) {
  return (
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <main className="p-6 flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
  );
}
