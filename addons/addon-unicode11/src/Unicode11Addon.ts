/**
 * Copyright (c) 2019 The xterm.js authors. All rights reserved.
 * @license MIT
 *
 * UnicodeVersionProvider for V11.
 */

import type { Terminal, ITerminalAddon } from '@daiyam/xterm-tab';
import type { Unicode11Addon as IUnicode11Api } from '@daiyam/xterm-tab-addon-unicode11';
import { UnicodeV11 } from './UnicodeV11';

export class Unicode11Addon implements ITerminalAddon , IUnicode11Api {
  public activate(terminal: Terminal): void {
    terminal.unicode.register(new UnicodeV11());
  }
  public dispose(): void { }
}
