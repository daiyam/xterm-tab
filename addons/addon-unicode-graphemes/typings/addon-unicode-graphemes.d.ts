/**
 * Copyright (c) 2023 The xterm.js authors. All rights reserved.
 * @license MIT
 */

import { Terminal, ITerminalAddon } from '@daiyam/xterm-tab';

declare module '@daiyam/xterm-tab-addon-unicode-graphemes' {
  export class UnicodeGraphemesAddon implements ITerminalAddon {
    constructor();
    public activate(terminal: Terminal): void;
    public dispose(): void;
  }
}
