import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Delete, Edit } from "lucide-react";
import { useNavigate } from "react-router-dom";


function InstructorCourses() {

    const navigate = useNavigate()

    return (
        <Card>
            <CardHeader className="flex justify-between flex-row items-center ">
                <CardTitle className="text-3xl font-extrabold ">
                    All Courses
                </CardTitle>
                <Button onClick={() => navigate('/instructor/create-new-course')} className="p-6">Create new Course</Button>
            </CardHeader>
            <CardContent>
                <div className="overflow x-auto">
                    <Table className="w-full">
                        <TableHeader>
                            <TableRow>
                                {/* Course column takes maximum space */}
                                <TableHead className="w-auto break-words whitespace-normal">Course</TableHead>
                                <TableHead className="w-[1/3] break-words whitespace-normal">Students</TableHead>
                                <TableHead className="w-[1/3] break-words whitespace-normal">Revenue</TableHead>
                                <TableHead className="w-[1/3] break-words whitespace-normal">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                {/* Course column gets maximum width */}
                                <TableCell className="font-medium w-auto break-words whitespace-normal">
                                    Vanilla Javascript 2025 with Advanced Techniques and Best Practices
                                </TableCell>
                                <TableCell className="w-[1/3] break-words whitespace-normal">112</TableCell>
                                <TableCell className="w-[1/3] break-words whitespace-normal">$447.75</TableCell>
                                <TableCell className="w-[1/3] break-words whitespace-normal">
                                    <Button variant="ghost" size="md" className="mr-5">
                                        <Edit />
                                    </Button>
                                    <Button variant="ghost" size="md" className="mr-5">
                                        <Delete />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>


                    {/* <Table>
                        <TableCaption>A list of your recent invoices.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                //<TableHead className="w-[400px]">Course</TableHead> //
                                <TableHead>Course</TableHead>
                                <TableHead>Students</TableHead>
                                <TableHead>Revenue</TableHead>
                                <TableHead className="text-right">Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">INV001</TableCell>
                                <TableCell>Paid</TableCell>
                                <TableCell>Credit Card</TableCell>
                                <TableCell className="text-right">$250.00</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table> */}

                </div>
            </CardContent>
        </Card>
    )
}

export default InstructorCourses;