import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InstructorContext } from "@/context/instructor-context";
import React, { useContext } from "react";

function CourseCurriculum() {
    const { courseCurriculumFormData, setCourseCurriculumFormData } = useContext(InstructorContext);
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Create Course Curriculum</CardTitle>
                </CardHeader>
                <CardContent>
                    <Button>Add Lecture</Button>
                    <div className="mt-4 space-y-4">

                    </div>
                </CardContent>
            </Card>
        </>
    )
}
export default CourseCurriculum;