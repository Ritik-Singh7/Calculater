const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".buttons button");

let result = "";

function updateDisplay(value) {
    display.textContent = value || "0";
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let value = button.textContent.trim();

        // AC
        if (value === "AC") {
            result = "";
        }

        // C
        else if (value === "C") {
            result = result.slice(0, -1);
        }

        // x → *
        else if (value === "x") {
            if ("+-*/.".includes(result.slice(-1))) {
                result = result.slice(0, -1) + "*";
            } else {
                result += "*";
            }
        }

        // +
        else if (value === "+") {
            if ("+-*/.".includes(result.slice(-1))) {
                result = result.slice(0, -1) + "+";
            } else {
                result += "+";
            }
        }

        // -
        else if (value === "-") {
            if ("+-*/.".includes(result.slice(-1))) {
                result = result.slice(0, -1) + "-";
            } else {
                result += "-";
            }
        }

        // .
        else if (value === ".") {
            if ("+-*/.".includes(result.slice(-1))) {
                result = result.slice(0, -1) + ".";
            } else {
                result += ".";
            }
        }

        // /
        else if (value === "/") {
            if ("+-*/.".includes(result.slice(-1))) {
                result = result.slice(0, -1) + "/";
            } else {
                result += "/";
            }
        }

        // =
        else if (value === "=") {
            try {
                if (result.trim() === "") return;
                result = String(eval(result));
            } catch {
                result = "Error";
            }
        }

        // Other inputs
        else {
            if (result === "Error") result = "";
            result += value;
        }

        updateDisplay(result);
    });
});

updateDisplay(result);
