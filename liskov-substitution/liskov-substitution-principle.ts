// SOLID - LISKOV SUBSTITUTION PRINCIPLE
// ----------------------------------------------

// It make sure that the derived class is substitutable with the base class
// It ensure that the relationship is in correct way
// It's extension of the open close principle
// It's a type hierarchy
// Technically it's behavioral subtypes


// Inherited class should be replaceable with base class
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

// CliLogger is substitutable with Logger class 
const clilogger: Logger = new CliLogger()
clilogger.log("This is CLI first log")
clilogger.log("This is CLI second log")
clilogger.log("This is CLI third log")

// FileSystemLogger is substitutable with Logger class
const fileSystemLogger: Logger = new FileSystemLogger()
fileSystemLogger.log("This is FileSystem first log")
fileSystemLogger.log("This is FileSystem second log")
fileSystemLogger.log("This is FileSystem third log")