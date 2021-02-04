class Logger {
    constructor(module, sep) {
        this.module = module;
        this.sep = sep;
    };
    log(msg) {
        console.log(this.module, this.sep, msg);
    };
    info(msg) {
        console.info(this.module, this.sep, msg);
    };
    debug(msg) {
        console.debug(this.module, this.sep, msg);
    };
};

function create(module, sep = "|") {
    return new Logger(module, sep);
};

module.exports = {
    "create": create
}