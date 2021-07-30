import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import BugReportIcon from "@material-ui/icons/BugReport";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CodeIcon from "@material-ui/icons/Code";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

const usestyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    margin: 0,
    top: "auto",
    right: 20,
    bottom: 20,
    left: "auto",
    position: "fixed",
    justifyContent: "center",
    alignItems: "center",
  },

  icons: {
    marginBottom: "10px",
  },
});

function HoverButton() {
  const [visibility, setVisibility] = useState(false);

  const classes = usestyles();

  return (
    <div className={classes.container}>
      {visibility ? (
        <>
          <Link href="https://github.com/MakeContributions/markdown-dungeon/issues">
            <Fab
              className={classes.icons}
              size="medium"
              color="secondary"
              aria-label="bugs-link"
            >
              <BugReportIcon />
            </Fab>
          </Link>
          <Link href="https://github.com/MakeContributions/markdown-dungeon">
            <Fab
              className={classes.icons}
              size="medium"
              color="secondary"
              aria-label="repo-link"
            >
              <CodeIcon />
            </Fab>
          </Link>
        </>
      ) : (
        ""
      )}
      <Fab
        className={classes.icons}
        color="secondary"
        aria-label="options"
        onClick={() => setVisibility(!visibility)}
      >
        <MoreVertIcon />
      </Fab>
    </div>
  );
}

export default HoverButton;
