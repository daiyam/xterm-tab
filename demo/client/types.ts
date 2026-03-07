/**
 * Copyright (c) 2018 The xterm.js authors. All rights reserved.
 * @license MIT
 *
 * This file is the entry point for browserify.
 */

import type { ImageAddon } from '@daiyam/xterm-tab-addon-image';
import type { AttachAddon } from '@daiyam/xterm-tab-addon-attach';
import type { ClipboardAddon } from '@daiyam/xterm-tab-addon-clipboard';
import type { FitAddon } from '@daiyam/xterm-tab-addon-fit';
import type { LigaturesAddon } from '@daiyam/xterm-tab-addon-ligatures';
import type { ProgressAddon } from '@daiyam/xterm-tab-addon-progress';
import type { SearchAddon } from '@daiyam/xterm-tab-addon-search';
import type { SerializeAddon } from '@daiyam/xterm-tab-addon-serialize';
import type { UnicodeGraphemesAddon } from '@daiyam/xterm-tab-addon-unicode-graphemes';
import type { Unicode11Addon } from '@daiyam/xterm-tab-addon-unicode11';
import type { WebFontsAddon } from '@daiyam/xterm-tab-addon-web-fonts';
import type { WebLinksAddon } from '@daiyam/xterm-tab-addon-web-links';
import type { WebglAddon } from '@daiyam/xterm-tab-addon-webgl';

export type AddonType = 'attach' | 'clipboard' | 'fit' | 'image' | 'ligatures' | 'progress' | 'search' | 'serialize' | 'unicode11' | 'unicodeGraphemes' | 'webFonts' | 'webLinks' | 'webgl';

export interface IDemoAddon<T extends AddonType> {
  name: T;
  canChange: boolean;
  ctor: (
    T extends 'attach' ? typeof AttachAddon :
      T extends 'clipboard' ? typeof ClipboardAddon :
        T extends 'fit' ? typeof FitAddon :
          T extends 'image' ? typeof ImageAddon :
            T extends 'ligatures' ? typeof LigaturesAddon :
              T extends 'progress' ? typeof ProgressAddon :
                T extends 'search' ? typeof SearchAddon :
                  T extends 'serialize' ? typeof SerializeAddon :
                    T extends 'webFonts' ? typeof WebFontsAddon :
                      T extends 'webLinks' ? typeof WebLinksAddon :
                        T extends 'unicode11' ? typeof Unicode11Addon :
                          T extends 'unicodeGraphemes' ? typeof UnicodeGraphemesAddon :
                            T extends 'webgl' ? typeof WebglAddon :
                              never
  );
  instance?: (
    T extends 'attach' ? AttachAddon :
      T extends 'clipboard' ? ClipboardAddon :
        T extends 'fit' ? FitAddon :
          T extends 'image' ? ImageAddon :
            T extends 'ligatures' ? LigaturesAddon :
              T extends 'progress' ? ProgressAddon :
                T extends 'search' ? SearchAddon :
                  T extends 'serialize' ? SerializeAddon :
                    T extends 'webFonts' ? WebFontsAddon :
                      T extends 'webLinks' ? WebLinksAddon :
                        T extends 'unicode11' ? Unicode11Addon :
                          T extends 'unicodeGraphemes' ? UnicodeGraphemesAddon :
                            T extends 'webgl' ? WebglAddon :
                              never
  );
}

export type AddonCollection = { [T in AddonType]: IDemoAddon<T> };
