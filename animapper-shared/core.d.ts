/**
 * Is offline
 */
declare const __isOffline__: boolean

/**
 * Fetch
 */
declare function fetch(url: string, options?: FetchOptions): Promise<FetchResponse>

interface FetchOptions {
    /** HTTP method, defaults to GET */
    method?: string
    /** Request headers */
    headers?: Record<string, string>
    /** Request body */
    body?: any
    /** Whether to bypass cloudflare */
    noCloudflareBypass?: boolean
    /** Timeout in seconds, defaults to 35 */
    timeout?: number
}

interface FetchResponse {
    /** Response status code */
    status: number
    /** Response status text */
    statusText: string
    /** Request method used */
    method: string
    /** Raw response headers */
    rawHeaders: Record<string, string[]>
    /** Whether the response was successful (status in range 200-299) */
    ok: boolean
    /** Request URL */
    url: string
    /** Response headers */
    headers: Record<string, string>
    /** Response cookies */
    cookies: Record<string, string>
    /** Whether the response was redirected */
    redirected: boolean
    /** Response content type */
    contentType: string
    /** Response content length */
    contentLength: number

    /** Get response text */
    text(): string

    /** Parse response as JSON */
    json<T = any>(): T
}

/**
 * Replaces the reference of the value with the new value.
 * @param value - The value to replace
 * @param newValue - The new value
 */
declare function $replace<T = any>(value: T, newValue: T): void

/**
 * Creates a deep copy of the value.
 * @param value - The value to copy
 * @returns A deep copy of the value
 */
declare function $clone<T = any>(value: T): T

/**
 * Converts a value to a string
 * @param value - The value to convert
 * @returns The string representation of the value
 */
declare function $toString(value: any): string

/**
 * Converts a value to a bytes array
 * @param value - The value to convert
 * @returns The bytes array
 */
declare function $toBytes(value: any): Uint8Array

/**
 * Sleeps for a specified amount of time
 * @param milliseconds - The amount of time to sleep in milliseconds
 */
declare function $sleep(milliseconds: number): void

declare function $await<T>(promise: Promise<T>): void

/**
 *
 * @param model
 */
declare function $arrayOf<T>(model: T): T[]

/**
 * Marshals and unmarshals a value to a JSON string
 * @param data - The value to marshal
 * @param dst - The destination to unmarshal the value to. Must be a reference.
 * @throws If unmarshalling fails
 */
declare function $unmarshalJSON(data: any, dst: any): void

/**
 * Get a user preference
 * @param key The key of the preference
 * @returns The value of the preference set by the user, the default value if it is not set, or undefined.
 */
declare function $getUserPreference(key: string): string | undefined;

/**
 * Habari
 */

declare namespace $habari {

    interface Metadata {
        season_number?: string[]
        part_number?: string[]
        title?: string
        formatted_title?: string
        anime_type?: string[]
        year?: string
        audio_term?: string[]
        device_compatibility?: string[]
        episode_number?: string[]
        other_episode_number?: string[]
        episode_number_alt?: string[]
        episode_title?: string
        file_checksum?: string
        file_extension?: string
        file_name?: string
        language?: string[]
        release_group?: string
        release_information?: string[]
        release_version?: string[]
        source?: string[]
        subtitles?: string[]
        video_resolution?: string
        video_term?: string[]
        volume_number?: string[]
    }

    /**
     * Parses a filename and returns the metadata
     * @param filename - The filename to parse
     * @returns The metadata
     */
    function parse(filename: string): Metadata
}

/**
 * GoFeed
 */

declare namespace $goFeed {
    function parse(str: string): Record<string, any>
}

/**
 * Buffer
 */

declare class Buffer extends ArrayBuffer {
    static poolSize: number

    constructor(arg?: string | ArrayBuffer | ArrayLike<number>, encoding?: string)

    static from(arrayBuffer: ArrayBuffer): Buffer
    static from(array: ArrayLike<number>): Buffer
    static from(string: string, encoding?: string): Buffer

    static alloc(size: number, fill?: string | number, encoding?: string): Buffer

    equals(other: Buffer | Uint8Array): boolean

    toString(encoding?: string): string
}


/**
 * Crypto
 */

declare class WordArray {
    toString(encoder?: CryptoJSEncoder): string;
}

// CryptoJS supports AES-128, AES-192, and AES-256. It will pick the variant by the size of the key you pass in. If you use a passphrase,
// then it will generate a 256-bit key.
declare class CryptoJS {
    static AES: {
        encrypt: (message: string, key: string | Uint8Array, cfg?: AESConfig) => WordArray;
        decrypt: (message: string | WordArray, key: string | Uint8Array, cfg?: AESConfig) => WordArray;
    }
    static enc: {
        Utf8: CryptoJSEncoder;
        Base64: CryptoJSEncoder;
        Hex: CryptoJSEncoder;
        Latin1: CryptoJSEncoder;
        Utf16: CryptoJSEncoder;
        Utf16LE: CryptoJSEncoder;
    }
}

declare interface AESConfig {
    iv?: Uint8Array;
}

declare class CryptoJSEncoder {
    stringify(input: Uint8Array): string;

    parse(input: string): Uint8Array;
}


/**
 * Doc
 */

declare class DocSelection {
    attr(name: string): string | undefined;
    attrs(): { [key: string]: string };
    children(selector?: string): DocSelection;
    closest(selector?: string): DocSelection;
    contents(): DocSelection;
    contentsFiltered(selector: string): DocSelection;
    data<T extends string | undefined>(name?: T): T extends string ? (string | undefined) : { [key: string]: string };
    each(callback: (index: number, element: DocSelection) => void): DocSelection;
    end(): DocSelection;
    eq(index: number): DocSelection;
    filter(selector: string | ((index: number, element: DocSelection) => boolean)): DocSelection;
    find(selector: string): DocSelection;
    first(): DocSelection;
    has(selector: string): DocSelection;
    text(): string;
    html(): string | null;
    is(selector: string | ((index: number, element: DocSelection) => boolean)): boolean;
    last(): DocSelection;
    length(): number;
    map<T>(callback: (index: number, element: DocSelection) => T): T[];
    next(selector?: string): DocSelection;
    nextAll(selector?: string): DocSelection;
    nextUntil(selector: string, until?: string): DocSelection;
    not(selector: string | ((index: number, element: DocSelection) => boolean)): DocSelection;
    parent(selector?: string): DocSelection;
    parents(selector?: string): DocSelection;
    parentsUntil(selector: string, until?: string): DocSelection;
    prev(selector?: string): DocSelection;
    prevAll(selector?: string): DocSelection;
    prevUntil(selector: string, until?: string): DocSelection;
    siblings(selector?: string): DocSelection;
}

declare class Doc extends DocSelection {
    constructor(html: string);
}

declare function LoadDoc(html: string): DocSelectionFunction;

declare interface DocSelectionFunction {
    (selector: string): DocSelection;
}

/**
 * Torrent utils
 */

declare interface $torrentUtils {
    getMagnetLinkFromTorrentData(b64: string): string
}

/**
 * ChromeDP
 */

declare interface ChromeBrowserOptions {
    timeout?: number;
    waitSelector?: string;
    waitDuration?: number;
    userAgent?: string;
    headless?: boolean;
}

declare interface NewChromeBrowserOptions {
    timeout?: number;
    userAgent?: string;
    headless?: boolean;
}

declare interface ChromeBrowser {
    navigate(url: string): Promise<void>;
    waitVisible(selector: string): Promise<void>;
    waitReady(selector: string): Promise<void>;
    click(selector: string): Promise<void>;
    sendKeys(selector: string, keys: string): Promise<void>;
    evaluate(jsCode: string): Promise<any>;
    innerHTML(selector: string): Promise<string>;
    outerHTML(selector: string): Promise<string>;
    text(selector: string): Promise<string>;
    attribute(selector: string, attributeName: string): Promise<string | null>;
    screenshot(selector: string): Promise<Uint8Array>;
    fullScreenshot(): Promise<Uint8Array>;
    sleep(milliseconds: number): Promise<void>;
    close(): Promise<void>;
}

declare class ChromeDP {
    static newBrowser(options?: NewChromeBrowserOptions): Promise<ChromeBrowser>;
    static scrape(url: string, options?: ChromeBrowserOptions): Promise<string>;
    static screenshot(url: string, options?: ChromeBrowserOptions): Promise<Uint8Array>;
    static evaluate(url: string, jsCode: string, options?: ChromeBrowserOptions): Promise<any>;
}

declare namespace $store {
    function set(key: string, value: any): void
    function get<T = any>(key: string): T
    function has(key: string): boolean
    function getOrSet<T = any>(key: string, setFunc: () => T): T
    function setIfLessThanLimit<T = any>(key: string, value: T, maxAllowedElements: number): boolean
    function unmarshalJSON(data: string): void
    function marshalJSON(value: any): string
    function reset(): void
    function values(): any[]
    function watch<T = any>(key: string, callback: (value: T) => void): void
}

