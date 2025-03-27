import { Button } from "@/components/ui/button";
import InstructorCourses from "./courses";
import InstructorDashboard from "./dashboard";
import { BarChart, Book, LogOut } from "lucide-react";
import { useContext, useState } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { AuthContext } from "@/context/auth-context";

// Import AlertDialog from shadcn/ui
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

function InstructorDashboardPage() {
    const [activeTab, setActiveTab] = useState("dashboard");
    const { resetCredentials } = useContext(AuthContext);

    const menuItems = [
        {
            icon: BarChart,
            label: "Dashboard",
            value: "Dashboard",
            component: <InstructorDashboard />,
        },
        {
            icon: Book,
            label: "Courses",
            value: "Courses",
            component: <InstructorCourses />,
        },
        {
            icon: LogOut,
            label: "Logout",
            value: "Logout",
            component: null,
        },
    ];

    function handleLogout() {
        console.log("Instructor logged out...");
        resetCredentials();
        sessionStorage.clear();
    }

    return (
        <>
            <div className="flex h-full min-h-screen bg-gray-600">
                {/* Sidebar */}
                <aside className="w-64 bg-white shadow-md hidden md:block">
                    <div className="p-4">
                        <h2 className="text-2xl font-bold mb-4">Instructor View</h2>
                        <nav>
                            {menuItems.map((menuItem) =>
                                menuItem.value === "Logout" ? (
                                    // Wrap Logout button with AlertDialog
                                    <AlertDialog key={menuItem.value}>
                                        <AlertDialogTrigger asChild>
                                            <Button className="w-full justify-start mb-2"
                                                variant={activeTab === menuItem.value ? 'secondary' : 'ghost'} >
                                                <menuItem.icon className="mr-2 h-4 w-4" />
                                                {menuItem.label}
                                            </Button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>Are you sure you want to logout?</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    You will be logged out and redirected to the login page.
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                <AlertDialogAction onClick={handleLogout}>Yes, Logout</AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                ) : (
                                    <Button
                                        className="w-full justify-start mb-2"
                                        key={menuItem.value}
                                        variant={activeTab === menuItem.value ? "secondary" : "ghost"}
                                        onClick={() => setActiveTab(menuItem.value)}
                                    >
                                        <menuItem.icon className="mr-2 h-4 w-4" />
                                        {menuItem.label}
                                    </Button>
                                )
                            )}
                        </nav>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-8 overflow-y-auto bg-red-600">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
                        <Tabs value={activeTab} onValueChange={setActiveTab}>
                            {menuItems.map((menuItem) => (
                                <TabsContent key={menuItem.value} value={menuItem.value}>
                                    {menuItem.component !== null ? menuItem.component : null}
                                </TabsContent>
                            ))}
                        </Tabs>
                    </div>
                </main>
            </div>
        </>
    );
}

export default InstructorDashboardPage;

// import { Button } from "@/components/ui/button";
// import InstructorCourses from "./courses";
// import InstructorDashboard from "./dashboard";
// import { BarChart, Book, LogOut } from "lucide-react";
// import { useContext, useState } from "react";
// import { Tabs, TabsContent } from "@/components/ui/tabs";
// import { AuthContext } from "@/context/auth-context";

// //this alert dialogue added
// import {
//     AlertDialog,
//     AlertDialogAction,
//     AlertDialogCancel,
//     AlertDialogContent,
//     AlertDialogDescription,
//     AlertDialogFooter,
//     AlertDialogHeader,
//     AlertDialogTitle,
//     AlertDialogTrigger,
// } from "@/components/ui/alert-dialog"


// function InstructorDashboardPage() {

//     const [activeTab, setActiveTab] = useState('dashboard')
//     const { resetCredentials } = useContext(AuthContext);

//     const menuItems = [
//         {
//             icon: BarChart,
//             label: 'Dashboard',
//             value: 'Dashboard',
//             component: <InstructorDashboard />
//         },
//         {
//             icon: Book,
//             label: 'Courses',
//             value: 'Courses',
//             component: <InstructorCourses />
//         },
//         {
//             icon: LogOut,
//             label: 'Logout',
//             value: 'Logout',
//             component: null
//         }
//     ]

//     function handleLogout() {
//         console.log('Instructor logout kia ...')
//         resetCredentials();
//         sessionStorage.clear();
//     }
//     return (
//         <>
//             <div className="flex h-full min-h-screen bg-gray-600">
//                 <aside className="w-64 bg-white shadow-md hidden md:block">
//                     <div className="p-4">
//                         <h2 className="text-2xl font-bold mb-4 ">Instructor View</h2>
//                         <nav>
//                             {
//                                 menuItems.map(menuItem => (
//                                     <Button className="w-full justify-start mb-2"
//                                         key={menuItem.value}
//                                         variant={activeTab === menuItem.value ? 'secondary' : 'ghost'}
//                                         onClick={menuItem?.value === 'Logout' ? handleLogout : () => setActiveTab(menuItem?.value)}>
//                                         <menuItem.icon className="mr-2 h-4 w-4" />
//                                         {menuItem.label}
//                                     </Button>
//                                 ))
//                             }
//                         </nav>
//                     </div>
//                 </aside>
//                 <main className="flex-1 p-8 overflow-y-auto bg-red-600">
//                     <div className="max-w-7xl mx-auto">
//                         <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
//                         <Tabs value={activeTab} onValueChange={setActiveTab}>
//                             {
//                                 menuItems.map(menuItem => (
//                                     <TabsContent key={menuItem?.value} value={menuItem?.value}>
//                                         {menuItem.component !== null ? menuItem.component : null}
//                                     </TabsContent>
//                                 ))
//                             }
//                         </Tabs>
//                     </div>
//                    //here the code was added 
//                 </main>
//             </div>
//         </>
//     )
// }
// export default InstructorDashboardPage; 