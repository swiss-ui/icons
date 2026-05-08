// SPDX-FileCopyrightText: AnmiTaliDev <anmitalidev@nuros.org>
// SPDX-License-Identifier: AGPL-3.0-only

import { getIcon } from "./generated";
import type { SwissIconName } from "./types";

class SwissIconElement extends HTMLElement {
  static observedAttributes = ["name", "size", "color", "stroke-width", "class"];

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  private render() {
    const name = this.getAttribute("name") as SwissIconName | null;
    if (!name) return;

    const size = Number(this.getAttribute("size") ?? 24);
    const color = this.getAttribute("color") ?? "currentColor";
    const strokeWidth = Number(this.getAttribute("stroke-width") ?? 2);
    const cls = this.getAttribute("class") ?? undefined;

    try {
      this.innerHTML = getIcon(name, { size, color, strokeWidth, class: cls });
    } catch {
      this.innerHTML = "";
    }
  }
}

if (typeof customElements !== "undefined" && !customElements.get("swiss-icon")) {
  customElements.define("swiss-icon", SwissIconElement);
}

export { SwissIconElement };
