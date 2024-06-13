import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CreateHabitForm from "@/components/CreateHabitForm";
import { Card } from "@/components/shadcn/ui/card";

function CreateHabit() {
    return (
        <div className="flex flex-col items-center w-full min-h-screen">
            <Header />
            <Card className="max-w-max p-4">
                <CreateHabitForm />
            </Card>
            <Footer />
        </div>
    );
}

export default CreateHabit;