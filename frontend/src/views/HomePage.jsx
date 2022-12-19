import { useContext } from "react";
import UserInfo from "../components/UserInfo";
import AuthContext from "../context/AuthContext";
import Typography from "@mui/material/Typography";

const Home = () => {
    const { user } = useContext(AuthContext);
    return (
        <section>
            {user && <UserInfo user={user} />}
            <Typography>
                Welcome to the Home Page of Scrum in Practice!
            </Typography>

        </section>
    );
};

export default Home;