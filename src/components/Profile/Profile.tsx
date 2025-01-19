import styles from "./Profile.module.css";
import EmailIcon from "@mui/icons-material/Email";
import { Button, Typography } from "@mui/material";

interface ProfileProps {
  name: string;
  bio: string;
  avatarUrl?: string;
  email: string;
}

export const Profile = ({
  name,
  bio,
  avatarUrl = "/images/placeholderAvatar.jpg",
  email,
}: ProfileProps) => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.avatarContainer}>
        <img src={avatarUrl} alt={name} className={styles.avatar} />
      </div>
      <div className={styles.infoContainer}>
        <Typography variant="h4" component="h1" className={styles.name}>
          {name}
        </Typography>
        <Typography variant="body1" className={styles.bio}>
          {bio}
        </Typography>
        <Typography variant="body2" className={styles.email}>
          <EmailIcon
            sx={{ fontSize: 16, verticalAlign: "middle", marginRight: 1 }}
          />
          {email}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }}
          href={`mailto:${email}`}
        >
          Написать мне
        </Button>
      </div>
    </div>
  );
};
