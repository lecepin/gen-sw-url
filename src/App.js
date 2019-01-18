import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Clipboard from "clipboard";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inData: "",
      outData: "",
      tip: false
    };
  }

  render() {
    const { inData, outData, tip } = this.state;
    return (
      <div className="App">
        <AppBar position="static">
          <Typography variant="h6" color="inherit">
            PreCache资源提取
          </Typography>
        </AppBar>
        <TextField
          className="input-textA"
          fullWidth
          label="网页代码"
          multiline
          rows="15"
          value={inData}
          onChange={e => this.setState({ inData: e.target.value })}
          margin="normal"
          helperText="粘贴代码到此处"
          variant="outlined"
        />

        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            const matchData = inData.match(
              /\"(https:)?\/\/.+alicdn.+\.(js|css)(\?.*?)?\"/gm
            );
            if (Array.isArray(matchData)) {
              this.setState({
                outData:
                  "\t" +
                  matchData
                    .map(item => {
                      item = item.replace(/"/g, "");
                      if (item.indexOf("//") === 0) {
                        item = `https:${item}`;
                      }
                      return `\"${item}\"`;
                    })
                    .join(",\n\t")
              });
            }
          }}
        >
          提取
        </Button>
        {outData && (
          <ClickAwayListener onClickAway={() => this.setState({ tip: false })}>
            <Tooltip
              PopperProps={{
                disablePortal: true
              }}
              onClose={() => this.setState({ tip: false })}
              open={tip}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              placement="right"
              title="已复制"
            >
              <Button
                className="App-copy"
                variant="contained"
                color="secondary"
                onClick={() => {
                  new Clipboard(".App-copy");
                  const cDom = document.querySelector(".App-copy");
                  if (!cDom) return;
                  cDom.setAttribute("data-clipboard-text", this.state.outData);
                  cDom.click();
                  this.setState({ tip: true });
                }}
              >
                复制
              </Button>
            </Tooltip>
          </ClickAwayListener>
        )}

        <TextField
          className="input-textA"
          fullWidth
          label="提取结果"
          multiline
          rows="8"
          value={outData}
          onChange={e => this.setState({ outData: e.target.value })}
          margin="normal"
          helperText="复制此处代码(请注意带可变时间戳的资源)"
          variant="outlined"
        />
      </div>
    );
  }
}

export default App;
