/// <reference types="node" />
import { ChildProcess } from "child_process";
export declare function init({ name, version, type, }: {
    name?: string;
    version: string;
    type?: string;
}): Promise<void>;
export declare function binName(name: string, version: string): string;
export declare function binPath(): string;
export declare class Node {
    process?: ChildProcess;
    httpUrl: string;
    binPath: string;
    binName: string;
    logFileName: string;
    nodeCfgPath: string;
    provider?: any;
    stopped: boolean;
    constructor(url: string, binPath: string, binName: string, nodeCfgPath: string);
    start(): Promise<void>;
    isUp: () => Promise<boolean>;
    stop(): Promise<void>;
}
//# sourceMappingURL=node.d.ts.map