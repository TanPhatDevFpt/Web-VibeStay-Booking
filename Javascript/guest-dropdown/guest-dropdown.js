const counts = { adult: 1, child: 0, room: 1 }
const mins = { adult: 1, child: 0, room: 1 }

function change(type, val) {
  counts[type] = Math.max(mins[type], counts[type] + val) // 0 → mins[type]
  document.getElementById(`${type}-count`).textContent = counts[type]
  document.getElementById('guest-summary').textContent =
    `${counts.adult} Adult(s), ${counts.child} Child, ${counts.room} Room`
  document.getElementById(`input-${type}`).value = counts[type];
}

document.getElementById('guest-toggle').addEventListener('click', () => {
  document.getElementById('guest-dropdown').classList.toggle('show')
})

function closeDropdown() {
  document.getElementById('guest-dropdown').classList.remove('show')
}