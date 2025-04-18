import { courseCurriculumInitialFormData, courseLandingInitialFormData } from "@/config";
import { createContext, useState } from "react";

const InstructorContext = createContext(null);

function InstructorProvider({ children }) {
    const [courseLandingFormData, setCourseLandingFormData] = useState(courseLandingInitialFormData);
    const [courseCurriculumFormData, setCourseCurriculumFormData] = useState(courseCurriculumInitialFormData);
    const [mediaUploadProgress, setMediaUploadProgress] = useState(false);
    return (
        <InstructorContext.Provider value={{
            courseLandingFormData,
            setCourseLandingFormData,
            courseCurriculumFormData,
            setCourseCurriculumFormData,
            mediaUploadProgress,
            setMediaUploadProgress
        }}>
            {children}
        </InstructorContext.Provider>
    )
}

export { InstructorContext, InstructorProvider };