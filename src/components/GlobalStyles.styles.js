import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  dashboardBody: {
    height: '100vh',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: 'linear-gradient(to right, #fdfbfb, #ebedee)'
  },
  rowContainer: {
    display: 'flex',
    gap: 5,
  },
  rowSquare: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 75,
    height: 75,
    border: [2, 'solid', 'green'],
  },
  tableContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
    paddingBottom: 50
  },
  keyboardContainer: {
    width: '60%'
  }
})

export const GlobalStyles = () => useStyles()
