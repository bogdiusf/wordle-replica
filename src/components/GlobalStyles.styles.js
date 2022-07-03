export const GlobalStyles = {
  dashboardBody: {
    minHeight: '100vh',
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
    width: 60,
    height: 60,
    border: [2, 'solid', 'green'],
    borderRadius: 5,
    textTransform: 'uppercase',
  },
  tableContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
    paddingBottom: 30
  },
  keyboardContainer: {
    width: '60%'
  }
}