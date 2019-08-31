import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Search from "@material-ui/icons/Search";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-dashboard-react/components/headerStyle.js";
import CustomInput from "components/CustomInput/CustomInput.js";

const useStyles = makeStyles(styles);

export default function Header(props) {
  const [name, setName] = useState("");
  const classes = useStyles();

  const { color } = props;
  const appBarClasses = classNames({
    [" " + classes[color]]: color
  });

  const handleChange = e => setName(e.target.value);

  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Toolbar
        className={classes.container}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <GridItem
          xs={12}
          sm={12}
          md={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <CustomInput
            formControlProps={{
              className: classes.margin + " " + classes.search
            }}
            value={name}
            inputProps={{
              placeholder: "Search",
              inputProps: {
                "aria-label": "Search"
              }
            }}
            handleChange={handleChange}
          />
          <Button
            color="white"
            aria-label="edit"
            justIcon
            round
            onClick={() => props.onSearchPerson(name)}
          >
            <Search />
          </Button>
        </GridItem>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  routes: PropTypes.arrayOf(PropTypes.object),
  onSearchPerson: PropTypes.func
};
