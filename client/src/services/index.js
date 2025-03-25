import axiosInstance from "@/api/axiosInstance"

export async function regsiterService(formData) {
    try {
        const { data } = await axiosInstance.post("/auth/register", {
            ...formData,
            role: 'user'
        })
        return data;
    }
    catch (error) {
        console.error("Error in registerService:", error);
        throw error;
    }
} 