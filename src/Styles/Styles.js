const styles = {
  // Importing Google Fonts for Poppins
  fontFamily: "'Poppins', sans-serif",
  
  nav: {
    position: "sticky",
    top: 0,
    width: "100%",
    backgroundColor: "#ffffff", // White background
    zIndex: 1000,
    padding: "10px 0", // Adjusted padding for compactness
    display: "flex", // Flexbox layout for aligning items
    justifyContent: "space-between", // Distribute items between left and right
    alignItems: "center", // Vertically center the items
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", // Soft shadow effect
    transition: "background-color 0.3s ease", // Smooth background transition
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    marginLeft: "20px", // Left spacing for logo
  },
  logo: {
    width: "40px",
    height: "40px",
    marginRight: "10px", // Spacing between logo and text
  },
  logoText: {
    fontSize: "24px",
    color: "#333", // Dark text color for contrast on white
    fontWeight: "bold",
    fontFamily: "'Poppins', sans-serif", // Poppins font
  },
  menu: {
    display: "flex",
    justifyContent: "center",
    listStyle: "none",
    margin: 0,
    padding: 0,
    marginRight: "20px", // Spacing on the right
  },
  menuItem: {
    margin: "0 15px", // Spacing between menu items
    color: "#333", // Dark color for text
    fontWeight: "bold",
    cursor: "pointer",
    padding: "10px 15px", // Padding for better click area
    fontFamily: "'Poppins', sans-serif", // Poppins font
    transition: "background-color 0.3s ease, color 0.3s ease", // Smooth hover transition
  },
  menuItemHover: {
    backgroundColor: "#f0f0f0", // Light gray background on hover
    color: "#2196F3", // Change text color on hover to blue
    transform: "scale(1.05)", // Slight zoom effect on hover
  },
  
  section: {
    height: "100vh",
    padding: "50px",
    boxSizing: "border-box",
  },
};

export default styles;
