declare namespace arbConverter {

    function fromArb(
        directoryWithJsonFiles: string,
        outputDir: string
    ): void;

    function toArb(
        arbFileLocation: string,
        outputDir: string
    ): void;
}


export = arbConverter;
export as namespace arbConverter;
