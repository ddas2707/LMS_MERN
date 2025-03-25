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

export async function loginService(formData) {
    try {
        const { data } = await axiosInstance.post("/auth/login", {
            ...formData,
        })
        return data;
    }
    catch (error) {
        console.error("Error in loginService:", error);
        throw error;
    }
}

export async function checkAuthService() {
    try {
        const { data } = await axiosInstance.get("/auth/check-auth")
        console.log("checkAuthService Check✅")
        //this will call on every reload 
        return data;
    }
    catch (error) {
        console.error("Error in checking auth services", error);
        throw error;
    }
} 