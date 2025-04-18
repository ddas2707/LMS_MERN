import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { courseCurriculumInitialFormData } from "@/config";
import { InstructorContext } from "@/context/instructor-context";
import { mediaUploadService } from "@/services";
import React, { useContext } from "react";

function CourseCurriculum() {
    const { courseCurriculumFormData,
        setCourseCurriculumFormData,
        mediaUploadProgress,
        setMediaUploadProgress
    } = useContext(InstructorContext);

    //function to handle the new lecture button click
    function handleNewLecture() {
        setCourseCurriculumFormData([
            ...courseCurriculumFormData,
            {
                ...courseCurriculumInitialFormData[0]
            }
        ])
        console.log(courseCurriculumFormData);
    }
    //function to handle the course title change
    function handleCourseTitleChange(e, index) {
        let cpyCourseCurriculumFormData = [...courseCurriculumFormData];
        cpyCourseCurriculumFormData[index] = {
            ...cpyCourseCurriculumFormData[index],
            title: e.target.value
        }
        //console.log(cpyCourseCurriculumFormData);
        setCourseCurriculumFormData(cpyCourseCurriculumFormData);
    }
    //function to handle the free preview switch---> if the video added is free preview or not
    // if the video is free preview then the video will be available for free to all the users
    // if the video is not free preview then the video will be available for only those users who have purchased the course
    function handlefreePreviewChange(value, index) {
        let cpyCourseCurriculumFormData = [...courseCurriculumFormData];
        cpyCourseCurriculumFormData[index] = {
            ...cpyCourseCurriculumFormData[index],
            freePreview: value
        }
        setCourseCurriculumFormData(cpyCourseCurriculumFormData); //updating the freePreview data 
        //console.log(value, index);
        //console.log(cpyCourseCurriculumFormData);
    }

    //function to handle the single lecture upload
    async function handleSingleLectureUpload(event, currIndex) {
        //console.log(event.target.files[0]);
        const selectedFile = event.target.files[0];
        const videoFormData = new FormData();
        if (selectedFile) {
            videoFormData.append("file", selectedFile);
        }
        try {
            setMediaUploadProgress(true);
            const response = await mediaUploadService(videoFormData);
            console.log(response, "response");
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Create Course Curriculum</CardTitle>
                </CardHeader>
                <CardContent>
                    <Button onClick={handleNewLecture}>Add Lecture</Button>
                    <div className="mt-4 space-y-4">
                        {
                            courseCurriculumFormData.map((curriculumItem, index) => (
                                <div key={index} className="border p-5 ">
                                    <div className="flex gap-5 items-center">
                                        <h3 className="font-semibold">Lecture {index + 1}</h3>
                                        <Input
                                            name={`title-${index + 1}`}
                                            placeholder="Enter Lecture Title"
                                            className="max-w-96"
                                            onChange={(e) => handleCourseTitleChange(e, index)}
                                            value={curriculumItem[index]?.title}
                                        />
                                        <div className="flex items-center space-x-2">
                                            <Switch
                                                onCheckedChange={(value) => handlefreePreviewChange(value, index)}
                                                checked={courseCurriculumFormData[index]?.freePreview}
                                                id={`freePreview-${index + 1}`}
                                            />
                                            <Label htmlFor={`freePreview-${index + 1}`}>Free Preview</Label>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <Input
                                            type="file"
                                            accept="video/*"
                                            onChange={(event) => handleSingleLectureUpload(event, index)}
                                            className="mb-4"
                                        />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </CardContent>
            </Card>
        </>
    )
}
export default CourseCurriculum;