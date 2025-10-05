document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("weapon-container");
  const savedProgress = JSON.parse(localStorage.getItem("weaponProgress") || "{}");

  function saveProgress() {
    localStorage.setItem("weaponProgress", JSON.stringify(savedProgress));
  }

  function render() {
    container.innerHTML = "";
    let total = 0;
    let completed = 0;

    Object.entries(weaponsByCategory).forEach(([category, weapons]) => {
      const catDiv = document.createElement("div");
      catDiv.className = "category";

      const title = document.createElement("h2");
      title.textContent = category;
      catDiv.appendChild(title);

      const progress = document.createElement("div");
      progress.className = "progress-container";
      const barOuter = document.createElement("div");
      barOuter.className = "progress-bar";
      const barInner = document.createElement("div");
      barOuter.appendChild(barInner);
      const percent = document.createElement("span");
      progress.append("進捗: ", barOuter, percent);
      catDiv.appendChild(progress);

      const grid = document.createElement("div");
      grid.className = "weapon-grid";

      let catCompleted = 0;

      weapons.forEach(name => {
        const key = `${category}-${name}`;
        const checked = savedProgress[key] || false;
        const wDiv = document.createElement("div");
        wDiv.className = "weapon" + (checked ? " checked" : "");
        wDiv.innerHTML = `
          <img src="icons/${name}.png" alt="${name}">
          <span>${name}</span>
        `;
        wDiv.onclick = () => {
          savedProgress[key] = !savedProgress[key];
          saveProgress();
          render();
        };
        grid.appendChild(wDiv);
        total++;
        if (checked) catCompleted++;
      });

      completed += catCompleted;
      const percentNum = Math.round((catCompleted / weapons.length) * 100);
      barInner.style.width = percentNum + "%";
      percent.textContent = `${percentNum}%`;

      catDiv.appendChild(grid);
      container.appendChild(catDiv);
    });

    // 全体進捗
    const overall = Math.round((completed / total) * 100);
    document.getElementById("overall-bar").style.width = `${overall}%`;
    document.getElementById("overall-percent").textContent = `${overall}%`;
  }

  render();
});
