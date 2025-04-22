import React from "react";

function App() {
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1>Harsh Kumar</h1>
        <p>Tech Enthusiast | INFT @ VESIT (2027)</p>

        <img
          src="https://via.placeholder.com/150"
          alt="Harsh"
          style={styles.profilePic}
        />

        <div style={styles.socialLinks}>
          <a
            href="https://www.linkedin.com/in/harsh-kumar-5864c92a7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn"
              style={styles.socialIcon}
            />
          </a>
          <a
            href="https://www.instagram.com/harshhhhdk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
              alt="Instagram"
              style={styles.socialIcon}
            />
          </a>
        </div>

        <div style={styles.section}>
          <h2>Projects</h2>

          <div style={styles.projectCard}>
            <h3>Chaindrive App</h3>
            <p>
              A smart logistics app for drivers with optimized route planning,
              parcel pickups on return trips, and commission-based earnings.
            </p>
          </div>

          <div style={styles.projectCard}>
            <h3>Printz Website</h3>
            <p>
              An automated solution for campus stationery shops featuring
              document pre-upload, live queue tracking, and pickup alerts.
            </p>
          </div>
        </div>

        <div style={styles.section}>
          <h2>Contact</h2>
          <p>Email: 2023.harsh.kumar@ves.ac.in</p>
          <p>Phone: 9321669927</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  body: {
    fontFamily: "Arial, sans-serif",
    margin: 0,
    padding: 0,
    textAlign: "center",
    background: "linear-gradient(135deg, #6a11cb, #72c7d8)",
    color: "white",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
  },
  container: {
    width: "80%",
    marginTop: "40px",
    padding: "20px",
    background: "rgba(255, 255, 255, 0.1)",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    borderRadius: "10px",
    backdropFilter: "blur(10px)",
  },
  profilePic: {
    width: "120px",
    borderRadius: "50%",
    border: "3px solid white",
    marginTop: "10px",
  },
  socialLinks: {
    marginTop: "15px",
  },
  socialIcon: {
    width: "35px",
    margin: "10px",
    borderRadius: "50%",
  },
  section: {
    marginTop: "30px",
  },
  projectCard: {
    background: "rgba(255, 255, 255, 0.2)",
    padding: "10px",
    margin: "15px auto",
    borderRadius: "5px",
    color: "white",
    maxWidth: "500px",
  },
};

export default App;
