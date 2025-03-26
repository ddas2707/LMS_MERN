import { Button } from "@/components/ui/button";
import InstructorCourses from "./courses";
import InstructorDashboard from "./dashboard";
import { BarChart, Book, LogOut } from "lucide-react";

function InstructorDashboardPage() {
    const menuItems = [
        {
            icon: BarChart,
            label: 'Dashboard',
            value: 'Dashboard',
            component: <InstructorDashboard />
        },
        {
            icon: Book,
            label: 'Courses',
            value: 'Courses',
            component: <InstructorCourses />
        },
        {
            icon: LogOut,
            label: 'Logout',
            value: 'Logout',
            component: null
        }
    ]
    return (
        <>
            <div className="flex flex-col min-h-screen bg-gray-600">
                <aside className="w-64 bg-white shadow-md hidden md:block">
                    <div className="p-4">
                        <h2 className="text-2xl font-bold mb-4 ">Instructor View</h2>
                        <nav>
                            {
                                menuItems.map(menuItem => (
                                    <Button className="w-full justify-start mb-2" key={menuItem.value}>
                                        <menuItem.icon className="mr-2 h-4 w-4" />
                                        {menuItem.label}
                                    </Button>
                                ))
                            }
                        </nav>
                    </div>
                </aside>
                <main>
                    {/* Idhr se krna h abh 
                    shuru hoja jdli */}
                </main>
            </div>
        </>
    )
}
export default InstructorDashboardPage;