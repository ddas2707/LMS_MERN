import { courseCurriculumInitialFormData, courseLandingInitialFormData } from "@/config";
import { createContext, useState } from "react";

const InstructorContext = createContext(null);

function InstructorProvider({ children }) {
    const [courseLandingFormData, setCourseLandingFormData] = useState(courseLandingInitialFormData);
    const [courseCurriculumFormData, setCourseCurriculumFormData] = useState(courseCurriculumInitialFormData);
    return (
        <InstructorContext.Provider value={{
            courseLandingFormData,
            setCourseLandingFormData,
            courseCurriculumFormData,
            setCourseCurriculumFormData,
        }}>
            {children}
        </InstructorContext.Provider>
    )
}

export { InstructorContext, InstructorProvider };