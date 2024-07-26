const Status = ({ message, messageStatus, text }) => {
  const styles = {
    good: {
      display: "flex",
      backgroundColor: "#B1ADAD",
      color: "#2F7533",
      padding: "15px",
      borderRadius: "10px",
      borderStyle: "solid",
      borderColor: "#2F7533",
      marginBottom: "15px",
    },
    bad: {
      display: "flex",
      backgroundColor: "#B1ADAD",
      color: "#d80000",
      padding: "15px",
      borderRadius: "10px",
      borderStyle: "solid",
      borderColor: "#d80000",
      marginBottom: "15px",
    },
  }

  return (
    <div>
      {messageStatus ? (
        <div style={text === "good" ? styles.good : styles.bad}>{message}</div>
      ) : (
        ""
      )}
    </div>
  )
}

export default Status
