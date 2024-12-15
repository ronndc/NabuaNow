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
  searchBar: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#f9f9f9", // Light gray background
    borderRadius: "8px", // Rounded corners
    padding: "2px 10px", // Padding for inner spacing
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // Subtle shadow
    transition: "box-shadow 0.3s ease",
  },
  searchInput: {
    border: "none", // Remove default border
    outline: "none", // Remove focus outline
    fontSize: "16px",
    fontFamily: "'Poppins', sans-serif", // Match font with navbar
    padding: "10px", // Inner padding
    flex: 1, // Allow the input to expand
    borderRadius: "8px",
    backgroundColor: "transparent", // Match parent background
    color: "#333", // Dark text color
  },
  searchInputFocus: {
    boxShadow: "0 0 8px rgba(33, 150, 243, 0.5)", // Blue focus glow
  },
  searchButton: {
    border: "none",
    outline: "none",
    backgroundColor: "#2196F3", // Blue button
    color: "#ffffff", // White text
    padding: "10px 15px", // Inner padding
    fontSize: "16px",
    fontFamily: "'Poppins', sans-serif",
    cursor: "pointer",
    borderRadius: "8px",
    transition: "background-color 0.3s ease", // Smooth hover transition
  },
  searchButtonHover: {
    backgroundColor: "#1976D2", // Darker blue on hover
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
