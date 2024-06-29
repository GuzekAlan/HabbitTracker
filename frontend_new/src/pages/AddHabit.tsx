import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Card } from "@/components/shadcn/ui/card";

function AddHabit() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen gap-[3vh]">
      <Header />
      <Card className="max-w-max p-4">
        <select>
          <option>Dupa</option>
          <option>Lepsza Dupa</option>
        </select>
      </Card>
      <Footer />
    </div>
  );
}

export default AddHabit;
