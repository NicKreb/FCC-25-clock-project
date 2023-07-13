function App() {
    return (
    <div className="wrapper">
        <div id="break-label">Break Length</div>
        <div className="break-wrapper">
            <div id="break-increment"></div>
            <div id="break-length"></div>
            <div id="break-decrement"></div>
        </div>
        <div id="session-label">Session Length</div>
        <div className="session-wrapper">
            <div id="session-increment"></div>
            <div id="session-length"></div>
            <div id="session-decrement"></div>
        </div>
        <div className="timer-wrapper">
            <div id="timer-label">Time Left</div>
            <div id="timer-left">
                //time should be displayed in mm:ss format!
            </div>
            <div className="timer-buttons">
                <div id="start_stop"></div>
                <div id="reset"></div>
            </div>
        </div>
    </div>
    )
};

ReactDOM.render(<App />, document.getElementById("clock-app"));
