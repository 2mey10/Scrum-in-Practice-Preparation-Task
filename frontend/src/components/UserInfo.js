import Typography from "@mui/material/Typography";

function UserInfo({ user }) {
    return (
        <div>
            <Typography>
                Hello, {user.username}
            </Typography>
        </div>
    );
}

export default UserInfo;