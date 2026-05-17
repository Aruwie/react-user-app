import "@testing-library/jest-dom";

// FIX TextEncoder issue
import { TextEncoder, TextDecoder } from "util";

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;