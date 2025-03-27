import { Button } from "@/components/ui/button";
import { useContext } from "react";

function StudentHomePage() {

    const { resetCredentials } = useContext(AuthContext);

    function handleLogout() {
        resetCredentials();
        sessionStorage.clear();
    }
    return (
        <>
            <h1>Hey</h1>
            <Button onClick={handleLogout}>Logout B</Button>
        </>
    )
}
export default StudentHomePage;