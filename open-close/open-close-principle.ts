// SOLID - OPEN CLOSE PRINCIPLE
// ----------------------------------------------
// To prevent the breaking of existing code for the reason of extension
// It states that - Open for extension but close for modification

// In our real world software engineering, we need to implement new feature.
// So it make sure that our existing code does not break for new implemenation by "extension"
// But it does not allow to alter/modify any existing implementation

// We should extend the functionality but should not change or modify the already existent methods
import fs from "fs"

abstract class Logger {
    private timestamp: string = ""

    public getLogInfo(message: string): string {
        return `${this.getTimeStamp()} ${message}`
    }

    protected setTimeStamp(timestamp: string): void {
        this.timestamp = timestamp
    }

    private getTimeStamp(): string {
        if (this.timestamp == "") {
            const today = new Date();
            const day = String(today.getDate()).padStart(2, '0');
            const month = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            const year = today.getFullYear();
            this.timestamp = `${year}-${month}-${day}`
        }

        return this.timestamp

    }

    abstract log(message: string): void
}

// Open for Extension to Cli logger
class CliLogger extends Logger {
    public log(message: string): void {
        console.log(this.getLogInfo(message))
    }
}

// Open for Extension to File system logger
class FileSystemLogger extends Logger {
    public log(message: string): void {
        fs.appendFileSync("app.log", `${this.getLogInfo(message)}\n`)
    }
}

const clilogger = new CliLogger()
clilogger.log("This is CLI first log")
clilogger.log("This is CLI second log")
clilogger.log("This is CLI third log")

const fileSystemLogger = new FileSystemLogger()
fileSystemLogger.log("This is FileSystem first log")
fileSystemLogger.log("This is FileSystem second log")
fileSystemLogger.log("This is FileSystem third log")