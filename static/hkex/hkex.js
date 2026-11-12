(() => {
  "use strict";
  document.querySelectorAll("[data-hkex-routes]").forEach((figure) => {
    const tabs = Array.from(figure.querySelectorAll("[data-hkex-tab]"));
    const panels = Array.from(figure.querySelectorAll("[data-hkex-panel]"));
    const tablist = figure.querySelector("[data-hkex-tabs]");
    if (!tablist || tabs.length !== panels.length) return;
    function activate(index, focus = false) {
      tabs.forEach((tab, i) => {
        const active = i === index;
        tab.setAttribute("aria-selected", String(active));
        tab.tabIndex = active ? 0 : -1;
        panels[i].hidden = !active;
      });
      if (focus) tabs[index].focus();
    }
    tabs.forEach((tab, index) => {
      tab.setAttribute("role", "tab");
      panels[index].setAttribute("role", "tabpanel");
      panels[index].setAttribute("aria-labelledby", tab.id);
      panels[index].tabIndex = 0;
      tab.addEventListener("click", () => activate(index));
      tab.addEventListener("keydown", (event) => {
        let next = index;
        if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
        else if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
        else if (event.key === "Home") next = 0;
        else if (event.key === "End") next = tabs.length - 1;
        else return;
        event.preventDefault();
        activate(next, true);
      });
    });
    tablist.setAttribute("role", "tablist");
    activate(0);
    tablist.hidden = false;
  });

  document.querySelectorAll("[data-hkex-fee]").forEach((figure) => {
    const slider = figure.querySelector("[data-hkex-range]");
    if (!slider) return;
    const signed = (value, digits) => `${value > 0 ? "+" : value < 0 ? "−" : ""}${Math.abs(value).toFixed(digits)}`;
    function update() {
      const change = Math.max(-30, Math.min(30, Number(slider.value) || 0));
      const delta = 9.14 * change / 100;
      const total = 9.14 + delta;
      figure.querySelector("[data-hkex-change]").textContent = `${signed(change, 0)}%`;
      figure.querySelector("[data-hkex-total]").textContent = total.toFixed(2);
      figure.querySelector("[data-hkex-delta]").textContent = signed(delta, 2);
      figure.querySelector("[data-hkex-fee-bar]").style.width = `${total / (9.14 * 1.3) * 100}%`;
      slider.setAttribute("aria-valuetext", `成交额变化${signed(change, 0)}%，北向交易费${total.toFixed(2)}亿港元`);
    }
    slider.disabled = false;
    slider.addEventListener("input", update);
    update();
  });
})();
