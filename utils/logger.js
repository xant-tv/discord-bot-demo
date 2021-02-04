class Logger {
    constructor(module, sep) {
        this.module = module;
        this.sep = sep;
    };
    format(raw) {
        const args = [
            this.module,
            toString(raw)
        ];
        return args;
    };
    log(raw) {
        const args = format(raw);
        const msg = args.join(this.sep);
        console.log(msg);
    };
    info(raw) {
        const args = format(raw);
        const msg = args.join(this.sep);
        console.info(msg);
    };
    debug(raw) {
        const args = format(raw);
        const msg = args.join(this.sep);
        console.debug(msg);
    };
};

function create(module, sep = " | ") {
    return new Logger(module, sep);
};

module.exports = {
    "create": create
}